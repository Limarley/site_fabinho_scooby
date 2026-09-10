import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import { contactSchema } from "@/lib/validations";

export const runtime = "nodejs";

function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  return fwd?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: Request) {
  const { allowed, retryAfterSeconds } = rateLimit(clientIp(req));
  if (!allowed) {
    return NextResponse.json(
      { ok: false, error: "Muitas tentativas. Tente novamente em alguns minutos." },
      { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Corpo inválido." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    // Honeypot preenchido: responder como sucesso para não dar feedback ao bot.
    const honeypot = parsed.error.issues.some((i) => i.path[0] === "website");
    if (honeypot) return NextResponse.json({ ok: true });

    return NextResponse.json(
      { ok: false, error: "Dados inválidos.", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const result = await sendContactEmail(parsed.data);
  if (!result.ok) {
    console.error("[contact] envio falhou:", result.error);
    return NextResponse.json(
      { ok: false, error: "Não foi possível enviar sua mensagem agora. Tente por e-mail ou WhatsApp." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

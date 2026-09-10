import { Resend } from "resend";
import { site } from "@/lib/content";
import { projectTypeLabel, type ContactInput } from "@/lib/validations";

const FROM_FALLBACK = "Site Fabinho Scooby <onboarding@resend.dev>";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export type SendResult = { ok: true; id?: string } | { ok: false; error: string };

/**
 * Envia a mensagem do formulário para contato@fabinhoscooby.com via Resend.
 * Sem RESEND_API_KEY (ambiente local), apenas loga e retorna sucesso para não travar o dev.
 */
export async function sendContactEmail(data: ContactInput): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.contact.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? FROM_FALLBACK;
  const subject = `[Site] ${projectTypeLabel(data.projectType)} — ${data.name}`;

  const text = [
    `Nome: ${data.name}`,
    `E-mail: ${data.email}`,
    `Tipo de projeto: ${projectTypeLabel(data.projectType)}`,
    "",
    data.message,
  ].join("\n");

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;color:#111">
      <h2 style="margin:0 0 16px">Nova mensagem pelo site</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        <tr><td style="padding:6px 0;color:#666;width:140px">Nome</td><td style="padding:6px 0">${escapeHtml(data.name)}</td></tr>
        <tr><td style="padding:6px 0;color:#666">E-mail</td><td style="padding:6px 0"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding:6px 0;color:#666">Tipo de projeto</td><td style="padding:6px 0">${escapeHtml(projectTypeLabel(data.projectType))}</td></tr>
      </table>
      <hr style="border:0;border-top:1px solid #eee;margin:20px 0" />
      <p style="white-space:pre-wrap;font-size:15px;line-height:1.6">${escapeHtml(data.message)}</p>
    </div>
  `;

  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY ausente — e-mail não enviado (modo dev).\n" + text);
    return { ok: true };
  }

  try {
    const resend = new Resend(apiKey);
    const { data: sent, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject,
      text,
      html,
    });
    if (error) return { ok: false, error: error.message };
    return { ok: true, id: sent?.id };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Falha ao enviar e-mail.";
    return { ok: false, error: message };
  }
}

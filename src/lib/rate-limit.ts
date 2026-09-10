/**
 * Rate limit simples em memória (por instância). Suficiente para um formulário de contato
 * de baixo volume; em produção na Vercel cada região/instância tem seu próprio contador.
 */
const WINDOW_MS = 10 * 60 * 1000; // 10 min
const MAX_HITS = 5;

const hits = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(key: string): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || entry.resetAt <= now) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  entry.count += 1;
  if (entry.count > MAX_HITS) {
    return { allowed: false, retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000) };
  }
  return { allowed: true, retryAfterSeconds: 0 };
}

// Limpeza ocasional para não crescer indefinidamente.
if (typeof setInterval === "function") {
  const timer = setInterval(() => {
    const now = Date.now();
    for (const [k, v] of hits) if (v.resetAt <= now) hits.delete(k);
  }, WINDOW_MS);
  // Não manter o processo vivo só por causa do timer (Node).
  (timer as unknown as { unref?: () => void }).unref?.();
}

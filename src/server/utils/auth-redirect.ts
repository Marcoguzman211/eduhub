const ALLOWED_HOSTS = new Set([
  process.env.NEXT_PUBLIC_APP_HOST ?? "", // e.g. app.mydomain.com
  "localhost",
  "127.0.0.1",
]);

export function safeCallbackUrl(input?: string | null, fallback = "/") {
  if (!input) return fallback;
  try {
    const url = new URL(
      input,
      process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    );
    if (ALLOWED_HOSTS.has(url.hostname))
      return url.pathname + url.search + url.hash;
    return fallback;
  } catch {
    return fallback;
  }
}

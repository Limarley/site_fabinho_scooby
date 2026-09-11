import { site } from "@/lib/content";
import { SocialLinks } from "./social-links";
import { Brand } from "./brand";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="hairline bg-background">
      <div className="container-site flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Brand />
          <p className="mt-2 text-sm text-muted">
            {site.location} · #TECLADISMO
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <a
            href={`mailto:${site.contact.email}`}
            className="text-sm text-muted transition-colors hover:text-ink"
          >
            {site.contact.email}
          </a>
          <SocialLinks />
        </div>
      </div>
      <div className="hairline">
        <div className="container-site py-5 text-xs text-muted">
          © {year} {site.fullName}
        </div>
      </div>
    </footer>
  );
}

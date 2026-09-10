import Link from "next/link";
import { navLinks, site } from "@/lib/content";
import { SocialLinks } from "./social-links";
import { Brand } from "./brand";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="hairline mt-24">
      <div className="container-site flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Brand size="lg" />
          <p className="mt-3 text-sm text-muted">
            {site.roles.join(" · ")}
            <br />
            {site.location}
          </p>
        </div>

        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3">
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
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            © {year} {site.fullName}. Todos os direitos reservados.
          </p>
          <p>Salvador · Bahia · Brasil</p>
        </div>
      </div>
    </footer>
  );
}

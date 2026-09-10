import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/content";

export function TeaserProjetos() {
  return (
    <Section
      id="projetos"
      className="hairline"
      eyebrow="Projetos próprios"
      title="Produção, teclados e comunidade."
      description="Além do palco, Fabinho é sócio, fundador e idealizador de projetos que movimentam a cena musical baiana e a comunidade de tecladistas do Brasil."
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {site.projects.map((p, i) => (
          <li key={p.id} className="group h-full">
            <Reveal delay={i * 0.08} className="h-full">
              <Link
                href={`/sobre#${p.id}`}
                className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-accent"
              >
                <div>
                  <p className="heading-display text-2xl">{p.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-accent">
                    {p.role}
                  </p>
                  <p className="mt-4 text-sm text-muted">{p.description}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-foreground group-hover:text-accent">
                  Saiba mais
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

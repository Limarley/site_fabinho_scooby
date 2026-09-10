import { ArrowUpRight, Award } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/content";

export function ProjetosProprios() {
  return (
    <div className="space-y-6">
      <ul className="grid gap-4 md:grid-cols-3">
        {site.projects.map((p, i) => (
          <li key={p.id} id={p.id} className="h-full scroll-mt-28">
            <Reveal
              delay={i * 0.08}
              className="flex h-full flex-col rounded-2xl border border-border bg-surface/60 p-6"
            >
              <p className="heading-display text-3xl">{p.name}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-accent">{p.role}</p>
              <p className="mt-4 flex-1 text-sm text-muted sm:text-base">{p.description}</p>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-accent"
                >
                  Visitar
                  <ArrowUpRight className="size-4" />
                </a>
              )}
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delay={0.2}>
        <div
          id="endorsement"
          className="flex flex-col gap-5 rounded-2xl border border-accent/30 bg-accent/5 p-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-4">
            <span
              aria-hidden="true"
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"
            >
              <Award className="size-5" />
            </span>
            <div>
              <p className="eyebrow">Endorsement</p>
              <p className="mt-1 font-display text-xl font-bold">{site.endorsement.brand}</p>
              <p className="mt-1 text-sm text-muted">{site.endorsement.description}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

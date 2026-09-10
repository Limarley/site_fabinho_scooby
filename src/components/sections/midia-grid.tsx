import { Tv, Radio } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import type { MediaAppearance } from "@/types/content";

type Props = { items: MediaAppearance[] };

/**
 * Grid de aparições em TV e mídia. Sem logos por enquanto (placeholders tipográficos);
 * quando houver os arquivos, basta adicionar `logo` ao item e trocar o conteúdo do card.
 */
export function MidiaGrid({ items }: Props) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {items.map((m, i) => {
        const Icon = m.kind === "tv" ? Tv : Radio;
        return (
          <li key={m.id} className="h-full">
            <Reveal
              delay={Math.min(i * 0.04, 0.3)}
              className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-accent/60"
            >
              <Icon aria-hidden="true" className="size-5 text-accent" />
              <div>
                <p className="font-display text-base font-bold leading-snug">{m.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                  {m.network ?? (m.kind === "tv" ? "TV" : "Emissora")}
                </p>
              </div>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}

"use client";

import { useMemo, useState } from "react";
import { Disc3 } from "lucide-react";
import type { Credit } from "@/types/content";
import { cn } from "@/lib/utils";

type Props = { items: Credit[] };

const ALL = "Todos";

/** Agrupa "ATTØØXXA / Carlinhos Brown" sob o artista principal para o filtro. */
function primaryArtist(artist: string): string {
  return artist.split("/")[0].trim();
}

export function CreditosGrid({ items }: Props) {
  const artists = useMemo(() => {
    const set = new Set(items.map((c) => primaryArtist(c.artist)));
    return [ALL, ...Array.from(set)];
  }, [items]);

  const [filter, setFilter] = useState<string>(ALL);

  const visible = filter === ALL ? items : items.filter((c) => primaryArtist(c.artist) === filter);

  return (
    <div>
      <div
        role="group"
        aria-label="Filtrar créditos por artista ou projeto"
        className="mb-8 flex flex-wrap gap-2"
      >
        {artists.map((a) => {
          const selected = a === filter;
          return (
            <button
              key={a}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(a)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                selected
                  ? "border-accent bg-accent text-accent-fg"
                  : "border-border text-muted hover:border-accent hover:text-foreground",
              )}
            >
              {a}
            </button>
          );
        })}
      </div>

      <ul className="grid gap-4 sm:grid-cols-2" aria-live="polite">
        {visible.map((c) => (
          <li
            key={c.id}
            className="flex gap-5 rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-accent/60"
          >
            <span
              aria-hidden="true"
              className="mt-0.5 inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
            >
              <Disc3 className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">{c.artist}</p>
              {c.album ? (
                <p className="mt-1 text-sm text-muted">Disco &ldquo;{c.album}&rdquo;</p>
              ) : null}
              <h3 className="mt-1 font-display text-xl font-bold leading-snug">
                {c.spotify ? (
                  <a
                    href={c.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    {c.album ? "Música " : null}&ldquo;{c.work}&rdquo;
                  </a>
                ) : (
                  <>
                    {c.album ? "Música " : null}&ldquo;{c.work}&rdquo;
                  </>
                )}
              </h3>
              {c.role ? (
                <p className="mt-2 text-sm text-accent">
                  {c.role}
                  {c.year ? <span className="text-muted"> · {c.year}</span> : null}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { TimelineItem } from "@/types/content";
import { cn } from "@/lib/utils";

type Props = { items: TimelineItem[] };

/**
 * Linha do tempo interativa: navegação por marcos (clique/teclado) com painel de detalhe.
 * Em telas pequenas vira uma lista vertical com todos os marcos expandidos.
 */
export function Timeline({ items }: Props) {
  const [active, setActive] = useState(() =>
    Math.max(
      0,
      items.findIndex((i) => i.featured),
    ),
  );
  const reduce = useReducedMotion();
  const current = items[active] ?? items[0];

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = items.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = index === last ? 0 : index + 1;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = index === 0 ? last : index - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    document.getElementById(`timeline-tab-${items[next].id}`)?.focus();
  };

  return (
    <div>
      {/* Desktop / tablet: tabs horizontais + painel */}
      <div className="hidden md:block">
        <div
          role="tablist"
          aria-label="Marcos da trajetória"
          className="relative grid"
          style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-[9px] h-px bg-border"
          />
          {items.map((item, i) => {
            const selected = i === active;
            return (
              <button
                key={item.id}
                id={`timeline-tab-${item.id}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`timeline-panel-${item.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className="group relative flex flex-col items-start gap-4 pr-4 text-left"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "relative z-10 size-[19px] rounded-full border-2 border-background transition-colors",
                    selected
                      ? "bg-accent ring-4 ring-accent/25"
                      : item.featured
                        ? "bg-accent/60 group-hover:bg-accent"
                        : "bg-border group-hover:bg-accent/60",
                  )}
                />
                <span
                  className={cn(
                    "text-xs font-semibold uppercase tracking-[0.18em] transition-colors",
                    selected ? "text-accent" : "text-muted group-hover:text-foreground",
                  )}
                >
                  {item.period}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative mt-8 min-h-[11rem] rounded-[2rem] border border-border bg-surface/60 p-8 lg:p-10">
          {items.map((item, i) => (
            <div
              key={item.id}
              id={`timeline-panel-${item.id}`}
              role="tabpanel"
              aria-labelledby={`timeline-tab-${item.id}`}
              hidden={i !== active}
            >
              {i === active && (
                <motion.div
                  key={item.id}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="grid gap-6 lg:grid-cols-[0.35fr_1fr]"
                >
                  <p className="heading-display text-4xl text-accent lg:text-5xl">
                    {current.period}
                  </p>
                  <div>
                    <h3 className="font-display text-2xl font-bold sm:text-3xl">{current.title}</h3>
                    <p className="mt-3 max-w-2xl text-muted sm:text-lg">{current.description}</p>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: lista vertical */}
      <ol className="relative flex flex-col gap-8 border-l border-border pl-6 md:hidden">
        {items.map((item) => (
          <li key={item.id} className="relative">
            <span
              aria-hidden="true"
              className={cn(
                "absolute -left-[31px] top-1 size-[11px] rounded-full border-2 border-background",
                item.featured ? "bg-accent" : "bg-border",
              )}
            />
            <p className="eyebrow">{item.period}</p>
            <h3 className="mt-2 font-display text-xl font-bold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { PortfolioCategory, PortfolioItem } from "@/types/content";

const FILTERS: { id: "all" | PortfolioCategory; label: string }[] = [
  { id: "all", label: "Tudo" },
  { id: "shows", label: "Shows" },
  { id: "333", label: "333" },
  { id: "estudio", label: "Estúdio" },
  { id: "instagram", label: "Instagram" },
];

type Props = { items: PortfolioItem[] };

export function PortfolioGallery({ items }: Props) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "all" ? items : items.filter((item) => item.category === filter)),
    [filter, items],
  );

  const current = openIndex !== null ? visible[openIndex] : undefined;
  const open = openIndex !== null && Boolean(current);

  useEffect(() => {
    setOpenIndex(null);
  }, [filter]);

  const go = (dir: -1 | 1) => {
    if (openIndex === null || visible.length === 0) return;
    setOpenIndex((openIndex + dir + visible.length) % visible.length);
  };

  const tabs = (
    <div role="tablist" aria-label="Filtrar galeria por categoria" className="mb-8 flex flex-wrap gap-2">
      {FILTERS.map((f) => {
        const selected = f.id === filter;
        return (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => setFilter(f.id)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              selected
                ? "border-accent bg-accent text-accent-fg"
                : "border-border text-muted hover:border-accent hover:text-foreground",
            )}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );

  if (items.length === 0) {
    return (
      <div>
        {tabs}
        <p className="rounded-2xl border border-dashed border-border bg-surface/40 px-6 py-16 text-center text-muted">
          Galeria em breve. As fotos entram em{" "}
          <code className="text-foreground">public/images/portfolio/</code> e no{" "}
          <code className="text-foreground">portfolio.json</code>.
        </p>
      </div>
    );
  }

  return (
    <div>
      {tabs}

      {visible.length === 0 ? (
        <p className="py-12 text-center text-muted">Nenhuma imagem nesta categoria ainda.</p>
      ) : (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {visible.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group relative block aspect-square w-full overflow-hidden rounded-2xl border border-border bg-surface text-left"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
            </li>
          ))}
        </ul>
      )}

      <Dialog open={open} onOpenChange={(next) => !next && setOpenIndex(null)}>
        <DialogContent
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              go(-1);
            }
            if (e.key === "ArrowRight") {
              e.preventDefault();
              go(1);
            }
          }}
          className="flex max-h-[90vh] flex-col gap-4"
        >
          {current && (
            <>
              <div className="flex items-start justify-between gap-4 text-accent-fg">
                <div>
                  <DialogTitle className="font-display text-xl font-bold">
                    {current.caption ?? current.alt}
                  </DialogTitle>
                  <DialogDescription className="mt-1 text-sm text-accent-fg/70">
                    {FILTERS.find((f) => f.id === current.category)?.label}
                    {visible.length > 1
                      ? ` · ${((openIndex ?? 0) + 1).toString()} de ${visible.length}`
                      : null}
                  </DialogDescription>
                </div>
                <DialogClose
                  className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-fg/10 text-accent-fg hover:bg-accent-fg/20"
                  aria-label="Fechar"
                >
                  <X className="size-5" />
                </DialogClose>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="96vw"
                  className="object-contain"
                  priority
                />
              </div>

              {visible.length > 1 && (
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    className="inline-flex items-center gap-2 rounded-full border border-accent-fg/30 px-4 py-2 text-sm font-medium text-accent-fg hover:border-accent-fg"
                  >
                    <ChevronLeft className="size-4" />
                    Anterior
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    className="inline-flex items-center gap-2 rounded-full border border-accent-fg/30 px-4 py-2 text-sm font-medium text-accent-fg hover:border-accent-fg"
                  >
                    Próxima
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

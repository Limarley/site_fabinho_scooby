import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { producer } from "@/lib/content";

export function Produtor() {
  return (
    <Reveal className="frame relative overflow-hidden bg-ink p-8 text-accent-fg sm:p-12 lg:p-16">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="eyebrow mb-4 text-accent-fg/60">Estúdio</p>
          <h2 className="heading-display text-4xl sm:text-5xl">{producer.title}</h2>
          <p className="mt-5 max-w-lg text-accent-fg/70 sm:text-lg">{producer.description}</p>
          <ul className="mt-6 space-y-2 text-sm text-accent-fg/80 sm:text-base">
            {producer.points.map((point) => (
              <li key={point} className="flex gap-2">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-fg" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:flex lg:justify-end">
          <Button
            asChild
            size="lg"
            className="w-full bg-accent-fg text-ink hover:bg-white sm:w-auto"
          >
            <Link href="/?tipo=producao#contato">
              Falar sobre produção
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </Reveal>
  );
}

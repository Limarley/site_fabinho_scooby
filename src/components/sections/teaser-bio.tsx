import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { timeline } from "@/lib/content";

export function TeaserBio() {
  const marcos = timeline.filter((t) => t.featured).slice(0, 2);
  return (
    <Section
      id="trajetoria"
      eyebrow="Trajetória"
      title="De sideman autodidata a diretor musical indicado ao Latin Grammy."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal>
          <p className="text-lg text-muted">
            Músico profissional desde 1999, Fabinho construiu a carreira no
            palco: do mercado baiano e nordestino às turnês pelo Brasil,
            Estados Unidos, Europa e Oceania. Tecladista do Jammil e Uma Noites
            desde 2011 e do 30PRAUM, assina composições, arranjos e produções ao
            lado de nomes como ATTØØXXA e Carlinhos Brown.
          </p>
          <Button asChild variant="link" className="mt-6 text-base">
            <Link href="/bio">
              Conheça a bio completa
              <ArrowRight />
            </Link>
          </Button>
        </Reveal>

        <ol className="flex flex-col gap-4">
          {marcos.map((m, i) => (
            <li key={m.id}>
              <Reveal
                delay={0.1 + i * 0.1}
                className="rounded-2xl border border-border bg-surface/60 p-6"
              >
                <p className="eyebrow">{m.period}</p>
                <p className="mt-2 font-display text-xl font-bold">{m.title}</p>
                <p className="mt-2 text-sm text-muted">{m.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

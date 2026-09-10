import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/content";

export function Destaques() {
  return (
    <section aria-labelledby="destaques-title" className="py-6 sm:py-10">
      <h2 id="destaques-title" className="sr-only">
        Destaques da carreira
      </h2>
      <div className="container-site">
        <ul className="frame grid grid-cols-2 gap-px overflow-hidden bg-border lg:grid-cols-4">
          {site.highlights.map((h, i) => (
            <li key={h.id} className="bg-background">
              <Reveal delay={i * 0.08} className="px-5 py-7 sm:px-7 sm:py-9">
                <p className="heading-display text-2xl sm:text-3xl md:text-4xl">{h.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted sm:text-sm">
                  {h.label}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Agora } from "@/components/sections/agora";
import { site } from "@/lib/content";

/** Segunda parte da SPA: quem é o Scooby, propósito do #TECLADISMO. */
export function HomeQuem() {
  const { homeQuem, highlights, pressPhoto, endorsement } = site;

  return (
    <section
      id="bio"
      aria-labelledby="home-quem-title"
      className="scroll-mt-20 bg-ink text-accent-fg"
    >
      <div className="container-site grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-fg/55">
            {homeQuem.eyebrow}
          </p>
          <h2
            id="home-quem-title"
            className="heading-display mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {homeQuem.title}
          </h2>
          <div className="mt-8 space-y-4 text-base text-accent-fg/75 sm:text-lg">
            {homeQuem.paragraphs.map((p) => (
              <p key={p} className="copy-justify">
                {p}
              </p>
            ))}
          </div>
          <p className="mt-8 text-sm text-accent-fg/50">
            {endorsement.brand}. {endorsement.description}
          </p>
        </Reveal>

        <Reveal delay={0.08} className="relative mx-auto w-full max-w-md">
          <Image
            src="/images/fabinho-scooby-bio.png"
            alt={pressPhoto.alt}
            width={936}
            height={1120}
            sizes="(min-width: 1024px) 420px, 80vw"
            unoptimized
            className="h-auto w-full"
          />
        </Reveal>
      </div>

      <div className="container-site pb-16 sm:pb-20">
        <p className="eyebrow mb-6 text-accent-fg/55">Agora</p>
        <Agora variant="ink" />
      </div>

      <div className="border-t border-accent-fg/15">
        <ul className="container-site grid grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <li
              key={h.id}
              className="border-accent-fg/15 px-5 py-8 sm:px-7 sm:py-10 border-b last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <Reveal delay={i * 0.06}>
                <p className="heading-display text-2xl sm:text-3xl">{h.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-accent-fg/50 sm:text-sm">
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

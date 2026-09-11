import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/layout/social-links";
import { site } from "@/lib/content";

const frameLinks = [
  { href: "#portfolio", label: "Portfólio" },
  { href: "#bio", label: "Bio" },
  { href: "#contato", label: "Contato" },
];

/**
 * Hero baseado no mockup de referência: moldura arredondada com borda preta,
 * silhueta centralizada sobre fundo branco desvanecido, nome gigante sobreposto,
 * redes no canto inferior esquerdo e funções no canto inferior direito.
 */
export function Hero() {
  return (
    <section id="home" className="scroll-mt-20 pt-20 sm:pt-24" aria-labelledby="hero-title">
      <div className="container-site">
        <div className="frame relative isolate h-[580px] overflow-hidden bg-background animate-fade-up sm:h-[660px] lg:h-[clamp(640px,calc(100svh-8.5rem),880px)]">
          {/* Coluna da foto: fundo branco com bordas desvanecendo para o creme.
              No mobile começa abaixo do título para não competir com o nome. */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 top-[30%] left-1/2 w-[82%] -translate-x-1/2 bg-white [mask-image:linear-gradient(to_right,transparent,#000_14%,#000_86%,transparent)] sm:top-0 sm:w-[58%] lg:w-[46%]"
          >
            <Image
              src={site.pressPhoto.src}
              alt=""
              fill
              priority
              sizes="(min-width: 1280px) 600px, (min-width: 640px) 60vw, 85vw"
              className="object-cover object-top"
            />
          </div>

          {/* Linha superior interna */}
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-5 text-sm font-medium sm:px-8 sm:py-7">
            <span>© {site.name}</span>
            <ul className="hidden items-center gap-8 md:flex">
              {frameLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-foreground/80 transition-colors hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nome gigante sobreposto à foto. Texto branco com mix-blend "difference":
              fica preto sobre o fundo claro e em negativo (branco) sobre a silhueta. */}
          <h1
            id="hero-title"
            className="heading-display absolute inset-x-0 top-[17%] px-4 text-center text-[clamp(2.75rem,12.5vw,9.75rem)] text-white mix-blend-difference sm:top-[15%]"
          >
            Fabinho Scooby
          </h1>

          {/* Redes: canto inferior esquerdo */}
          <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8">
            <SocialLinks variant="solid" direction="col" />
          </div>

          {/* Funções: canto inferior direito. Mesmo negativo do nome (mix-blend difference). */}
          <p className="heading-display absolute bottom-5 right-5 max-w-[60%] text-right text-2xl leading-[1.05] text-white mix-blend-difference sm:bottom-8 sm:right-8 sm:text-4xl lg:text-5xl">
            {site.roles.map((r) => (
              <span key={r} className="block">
                {r}
              </span>
            ))}
          </p>

          <span className="sr-only">{site.pressPhoto.alt}</span>
        </div>

        {/* Sub-hero: descrição e chamadas */}
        <div className="grid gap-6 py-8 sm:py-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="eyebrow mb-3">#TECLADISMO</p>
            <p className="max-w-2xl text-lg text-muted sm:text-xl">{site.heroDescription}</p>
            <p className="mt-3 max-w-2xl text-sm text-muted">{site.tagline}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted">
              {site.highlights.map((h) => h.value).join(" · ")}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button asChild size="lg">
              <a href="#contato">
                Começar agora
                <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#bio">Quem é o Scooby</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

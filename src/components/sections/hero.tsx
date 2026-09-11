import Image from "next/image";
import { SocialLinks } from "@/components/layout/social-links";
import { site } from "@/lib/content";

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

          <h1
            id="hero-title"
            className="heading-display absolute inset-x-0 top-[17%] px-4 text-center text-[clamp(2.75rem,12.5vw,9.75rem)] text-white mix-blend-difference sm:top-[15%]"
          >
            Fabinho Scooby
          </h1>

          <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8">
            <SocialLinks variant="solid" direction="col" />
          </div>

          <p className="heading-display absolute bottom-5 right-5 max-w-[60%] text-right text-2xl leading-[1.05] text-white mix-blend-difference sm:bottom-8 sm:right-8 sm:text-4xl lg:text-5xl">
            {site.roles.map((r) => (
              <span key={r} className="block">
                {r}
              </span>
            ))}
          </p>

          <span className="sr-only">{site.pressPhoto.alt}</span>
        </div>

        <div className="py-8 sm:py-10">
          <p className="eyebrow mb-3">#TECLADISMO</p>
          <p className="max-w-2xl text-lg text-muted sm:text-xl">{site.heroDescription}</p>
          <p className="mt-3 max-w-2xl text-sm text-muted">{site.tagline}</p>
        </div>
      </div>
    </section>
  );
}


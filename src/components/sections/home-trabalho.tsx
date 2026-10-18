import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { YouTubeFacade } from "@/components/sections/youtube-facade";
import { InstagramCard } from "@/components/sections/instagram-card";
import { creditos, portfolio, site } from "@/lib/content";

/** Terceira parte da SPA: prova de trabalho + oferta (palco, produção, #TECLADISMO). */
export function HomeTrabalho() {
  const { featuredPodcast, instagram } = portfolio;

  return (
    <section
      id="portfolio"
      aria-labelledby="home-trabalho-title"
      className="scroll-mt-20 bg-surface"
    >
      <div className="container-site py-20 sm:py-28">
        <header className="mb-10 sm:mb-14">
          <p className="eyebrow mb-3">Portfólio</p>
          <h2
            id="home-trabalho-title"
            className="heading-display text-3xl sm:text-4xl md:text-5xl"
          >
            Palco, estúdio e #TECLADISMO.
          </h2>
          <p className="copy-justify mt-4 text-base text-muted sm:text-lg">
            Palco com a 30PRAUM, produção na PLUS+ e educação no #Tecladismo e na
            Pracatum. No COST FLOW, o próprio Scooby conta a trajetória.
          </p>
        </header>

        <Reveal>
          <YouTubeFacade
            videoId={featuredPodcast.youtubeId}
            title={featuredPodcast.title}
          />
          <p className="mt-4 text-sm text-muted">
            {featuredPodcast.title}. {featuredPodcast.caption}
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {site.offers.map((offer, i) => (
            <li key={offer.id}>
              <Reveal delay={i * 0.08} className="h-full">
                <a
                  href={offer.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent"
                >
                  <div>
                    <p className="heading-display text-2xl">{offer.name}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">
                      {offer.topics.join(" · ")}
                    </p>
                    <p className="copy-justify mt-4 text-sm text-muted">{offer.description}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold group-hover:text-accent">
                    Falar sobre isso
                    <ArrowUpRight className="size-4" />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <p className="eyebrow mb-4">Créditos</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {creditos.map((c) => {
              const body = (
                <>
                  <span className="font-display font-bold">{c.artist}</span>
                  {c.album ? (
                    <>
                      {", Disco "}
                      &ldquo;{c.album}&rdquo;
                      {", Música "}
                      &ldquo;{c.work}&rdquo;
                    </>
                  ) : (
                    <>
                      {", "}
                      &ldquo;{c.work}&rdquo;
                    </>
                  )}
                  {c.role ? (
                    <>
                      {" "}
                      <span className="text-muted">
                        ({c.role}
                        {c.year ? `, ${c.year}` : ""})
                      </span>
                    </>
                  ) : null}
                </>
              );
              const className =
                "block rounded-2xl border border-border bg-background px-5 py-4 text-sm transition-colors";
              return (
                <li key={c.id}>
                  {c.spotify ? (
                    <a
                      href={c.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${className} group hover:border-accent`}
                    >
                      {body}
                      <span className="mt-2 block text-xs font-semibold text-muted group-hover:text-accent">
                        Ouvir no Spotify
                      </span>
                    </a>
                  ) : (
                    <div className={className}>{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-10">
          <InstagramCard profile={instagram} />
        </div>
      </div>
    </section>
  );
}

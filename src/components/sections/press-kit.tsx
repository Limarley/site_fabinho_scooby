import Image from "next/image";
import { CopyButton } from "@/components/ui/copy-button";
import { Reveal } from "@/components/ui/reveal";
import { creditos, site } from "@/lib/content";

function creditsAsText(): string {
  return creditos
    .map((c) => `${c.artist} — "${c.work}" (${c.role}${c.year ? `, ${c.year}` : ""})`)
    .join("\n");
}

export function PressKit() {
  const bioLong = site.bioLong.join("\n\n");
  const credits = creditsAsText();

  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      {/* Foto oficial */}
      <Reveal>
        <figure className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-surface/60">
          <div className="relative aspect-[3/4] bg-white">
            <Image
              src={site.pressPhoto.src}
              alt={site.pressPhoto.alt}
              fill
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="object-cover"
            />
          </div>
          <figcaption className="p-6">
            <p className="font-display text-lg font-bold">Foto oficial</p>
            <p className="mt-1 text-sm text-muted">
              Retrato em preto e branco. Uso para imprensa e divulgação de eventos com crédito
              &ldquo;Divulgação&rdquo;.
            </p>
          </figcaption>
        </figure>
      </Reveal>

      <div className="flex flex-col gap-6">
        <Reveal delay={0.05}>
          <article className="rounded-[2rem] border border-border bg-surface/60 p-6 sm:p-8">
            <header className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Bio curta</p>
                <h3 className="mt-2 font-display text-xl font-bold">Para releases e programas</h3>
              </div>
              <CopyButton text={site.bioShort} label="Copiar bio curta" />
            </header>
            <p className="mt-5 text-muted">{site.bioShort}</p>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="rounded-[2rem] border border-border bg-surface/60 p-6 sm:p-8">
            <header className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Bio longa</p>
                <h3 className="mt-2 font-display text-xl font-bold">Para matérias e catálogos</h3>
              </div>
              <CopyButton text={bioLong} label="Copiar bio longa" />
            </header>
            <div className="mt-5 space-y-4 text-muted">
              {site.bioLong.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.15}>
          <article className="rounded-[2rem] border border-border bg-surface/60 p-6 sm:p-8">
            <header className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Créditos</p>
                <h3 className="mt-2 font-display text-xl font-bold">Trabalhos selecionados</h3>
              </div>
              <CopyButton text={credits} label="Copiar créditos" />
            </header>
            <ul className="mt-5 space-y-2 text-sm text-muted">
              {creditos.map((c) => (
                <li key={c.id}>
                  <span className="text-foreground">{c.artist}</span> — &ldquo;{c.work}&rdquo;{" "}
                  <span className="text-accent">({c.role})</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </div>
  );
}

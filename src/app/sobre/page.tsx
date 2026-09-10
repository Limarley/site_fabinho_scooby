import type { Metadata } from "next";
import { GraduationCap, Music4 } from "lucide-react";
import { PageHeader, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ProjetosProprios } from "@/components/sections/projetos-proprios";
import { PressKit } from "@/components/sections/press-kit";
import { CtaContato } from "@/components/sections/cta-contato";
import { site } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Sobre",
  description: site.bioShort,
  path: "/sobre",
});

const allRoles = [
  "Tecladista",
  "Diretor musical",
  "Produtor musical",
  "Arranjador",
  "Programador",
  "Beat maker",
  "Educador musical",
];

export default function SobrePage() {
  return (
    <>
      <PageHeader title="Sobre" description={site.bioShort} />

      {/* Quem é */}
      <Section id="quem-e" eyebrow="Quem é" title="Autodidata, baiano, de palco.">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal className="space-y-5 text-lg text-muted">
            {site.whoIs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/60">
              {[
                ["Nome", site.fullName],
                ["Nascimento", site.born],
                ["Base", site.location],
                ["Profissional desde", "1999"],
              ].map(([k, v]) => (
                <div key={k} className="bg-background p-5">
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted">{k}</dt>
                  <dd className="mt-2 font-display text-lg font-bold">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      {/* Formação + Atuação */}
      <Section
        id="formacao"
        className="hairline"
        eyebrow="Formação e atuação"
        title="Do ouvido à academia, do palco ao estúdio."
      >
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal>
            <h3 className="flex items-center gap-3 font-display text-xl font-bold">
              <GraduationCap aria-hidden="true" className="size-5 text-accent" />
              Formação
            </h3>
            <ol className="mt-6 divide-y divide-border rounded-2xl border border-border bg-surface/60">
              {site.education.map((e) => (
                <li key={e.id} className="grid gap-1 p-5 sm:grid-cols-[7rem_1fr] sm:gap-6">
                  <p className="eyebrow">{e.period}</p>
                  <div>
                    <p className="font-display text-lg font-bold">{e.institution}</p>
                    <p className="mt-1 text-sm text-muted">{e.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="flex items-center gap-3 font-display text-xl font-bold">
              <Music4 aria-hidden="true" className="size-5 text-accent" />
              Atuação
            </h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {allRoles.map((r) => (
                <li
                  key={r}
                  className="rounded-full border border-border px-4 py-2 text-sm text-foreground/90"
                >
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Turnês pelo Brasil, Estados Unidos, Europa e Oceania. Direção musical, arranjos e
              produção para artistas e marcas, além da formação de novos tecladistas.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Projetos próprios + endorsement */}
      <Section
        id="projetos"
        className="hairline"
        eyebrow="Projetos próprios"
        title="Produtora, projeto autoral e comunidade."
        description="Além dos palcos, Fabinho constrói: a PLUS+, o 3h3ads Keys e o Tecladismo Brasil."
      >
        <ProjetosProprios />
      </Section>

      {/* Kit de imprensa */}
      <Section
        id="imprensa"
        className="hairline"
        eyebrow="Kit de imprensa"
        title="Material pronto para uso"
        description="Bios, foto oficial em alta resolução e créditos para veículos de imprensa, curadores e organizadores de eventos."
      >
        <PressKit />
      </Section>

      <CtaContato
        title="Imprensa, eventos ou parcerias?"
        description="Entrevistas, pautas, convites para festivais e propostas de endorsement: fale direto com o Fabinho."
      />
    </>
  );
}

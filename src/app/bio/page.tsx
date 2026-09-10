import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Timeline } from "@/components/sections/timeline";
import { CreditosGrid } from "@/components/sections/creditos-grid";
import { MidiaGrid } from "@/components/sections/midia-grid";
import { MediaEmbed } from "@/components/sections/media-embed";
import { CtaContato } from "@/components/sections/cta-contato";
import { JsonLd, performingGroupsJsonLd } from "@/components/seo/json-ld";
import { creditos, midia, timeline } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const description =
  "Trajetória de Fabinho Scooby: do início como sideman em 1999 à indicação ao Latin Grammy. Linha do tempo, créditos com Jammil e ATTØØXXA e aparições na TV.";

export const metadata: Metadata = pageMetadata({
  title: "Bio",
  description,
  path: "/bio",
});

export default function BioPage() {
  return (
    <>
      <PageHeader
        title="Bio"
        description="De sideman autodidata a diretor musical indicado ao Latin Grammy: uma carreira construída em cima do palco."
      />

      <Section
        id="trajetoria"
        eyebrow="Trajetória"
        title="Linha do tempo"
        description="Os marcos que definem a carreira. Navegue pelos anos para ver cada capítulo."
      >
        <Reveal>
          <Timeline items={timeline} />
        </Reveal>
      </Section>

      <Section
        id="creditos"
        className="hairline"
        eyebrow="Créditos e discografia"
        title="Composição, arranjo e teclados"
        description="Trabalhos selecionados em estúdio, filtráveis por artista ou projeto."
      >
        <Reveal>
          <CreditosGrid items={creditos} />
        </Reveal>
      </Section>

      <MediaEmbed className="hairline" />

      <Section
        id="midia"
        className="hairline"
        eyebrow="Mídia e TV"
        title="Nos principais programas do Brasil"
        description="Com o Jammil e Uma Noites, Fabinho passou pelos palcos da TV aberta e por cabo em todo o país."
      >
        <MidiaGrid items={midia} />
      </Section>

      <CtaContato
        title="Quer o Fabinho no seu próximo projeto?"
        description="Shows, turnês, direção musical e gravações. Escreva por e-mail ou WhatsApp."
      />

      <JsonLd data={performingGroupsJsonLd()} />
    </>
  );
}

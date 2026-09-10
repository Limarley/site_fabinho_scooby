import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Destaques } from "@/components/sections/destaques";
import { TeaserBio } from "@/components/sections/teaser-bio";
import { TeaserProjetos } from "@/components/sections/teaser-projetos";
import { MediaEmbed } from "@/components/sections/media-embed";
import { CtaContato } from "@/components/sections/cta-contato";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `${site.name} — ${site.roles.join(", ")}`,
  description: site.heroDescription,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Destaques />
      <TeaserBio />
      <MediaEmbed />
      <TeaserProjetos />
      <CtaContato />
    </>
  );
}

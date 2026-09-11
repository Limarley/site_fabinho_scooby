import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { HomeQuem } from "@/components/sections/home-quem";
import { HomeTrabalho } from "@/components/sections/home-trabalho";
import { Contato } from "@/components/sections/contato";
import { JsonLd, performingGroupsJsonLd } from "@/components/seo/json-ld";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `${site.name} | ${site.roles.join(", ")}`,
  description: site.heroDescription,
  alternates: { canonical: "/" },
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ tipo?: string }>;
}) {
  const { tipo } = await searchParams;

  return (
    <>
      <Hero />
      <HomeQuem />
      <HomeTrabalho />
      <Contato defaultProjectType={tipo} />
      <JsonLd data={performingGroupsJsonLd()} />
    </>
  );
}

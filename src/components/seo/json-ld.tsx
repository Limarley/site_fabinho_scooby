import { site } from "@/lib/content";
import { absoluteUrl, siteUrl } from "@/lib/seo";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: site.name,
    alternateName: site.fullName,
    url: siteUrl,
    image: absoluteUrl(site.pressPhoto.src),
    description: site.bioShort,
    jobTitle: site.roles,
    ...(site.contact.email.includes("@") ? { email: `mailto:${site.contact.email}` } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Salvador",
      addressRegion: "BA",
      addressCountry: "BR",
    },
    sameAs: [site.social.instagram, site.social.spotify],
    alumniOf: { "@type": "MusicGroup", name: "Jammil e Uma Noites" },
    memberOf: { "@type": "MusicGroup", name: "30PRAUM" },
    knowsAbout: [
      "Teclado",
      "Direção musical",
      "Produção musical",
      "Arranjo",
      "Beat making",
    ],
  };
}

export function performingGroupsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicGroup",
        name: "Jammil e Uma Noites",
        alumni: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "MusicGroup",
        name: "30PRAUM",
        member: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "Organization",
        name: "PLUS+ Produção Musical",
        founder: { "@id": `${siteUrl}/#person` },
      },
    ],
  };
}

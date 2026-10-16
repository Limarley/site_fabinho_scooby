import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HashScroll } from "@/components/layout/hash-scroll";
import { JsonLd, personJsonLd } from "@/components/seo/json-ld";
import { site } from "@/lib/content";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Inter_Tight({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const title = `${site.name} | ${site.roles.join(", ")}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s · ${site.name}`,
  },
  description: site.heroDescription,
  applicationName: site.name,
  authors: [{ name: site.fullName, url: siteUrl }],
  creator: site.fullName,
  keywords: [
    "Fabinho Scooby",
    "tecladista",
    "diretor musical",
    "produtor musical",
    "arranjador",
    "Salvador",
    "Jammil e Uma Noites",
    "30PRAUM",
    "Matuê",
    "#Tecladismo",
    "PLUS+ Produção Musical",
    "Escola Pracatum",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: site.name,
    title,
    description: site.heroDescription,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.heroDescription,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#efeee9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${display.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
        >
          Pular para o conteúdo
        </a>
        <Navbar />
        <HashScroll />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd data={personJsonLd()} />
        <Analytics />
      </body>
    </html>
  );
}

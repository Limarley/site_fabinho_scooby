import siteJson from "@/content/site.json";
import timelineJson from "@/content/timeline.json";
import creditosJson from "@/content/creditos.json";
import midiaJson from "@/content/midia.json";
import agoraJson from "@/content/agora.json";
import producerJson from "@/content/producer.json";
import portfolioJson from "@/content/portfolio.json";
import type {
  AgoraItem,
  Credit,
  MediaAppearance,
  PortfolioContent,
  ProducerContent,
  SiteContent,
  TimelineItem,
} from "@/types/content";

export const site: SiteContent = siteJson;
export const timeline: TimelineItem[] = timelineJson;
/** Timeline do presente para 1999. O JSON permanece cronológico para edição. */
export const timelineDescending: TimelineItem[] = [...timeline].reverse();
export const creditos: Credit[] = creditosJson;
export const midia: MediaAppearance[] = midiaJson as MediaAppearance[];
export const agora: AgoraItem[] = agoraJson;
export const producer: ProducerContent = producerJson;
export const portfolio: PortfolioContent = portfolioJson as PortfolioContent;

export const navLinks = [
  { id: "home", href: "/#home", label: "Home" },
  { id: "bio", href: "/#bio", label: "Bio" },
  { id: "portfolio", href: "/#portfolio", label: "Portfólio" },
  { id: "contato", href: "/#contato", label: "Contato" },
] as const;

export const allRoles = [
  "Tecladista",
  "Diretor musical",
  "Produtor musical",
  "Arranjador",
  "Programador",
  "Beat maker",
  "Educador musical",
] as const;

export function whatsappUrl(message = site.contact.whatsappMessage) {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function whatsappDisplay() {
  const n = site.contact.whatsapp;
  if (n.length !== 13) return `+${n}`;
  return `+${n.slice(0, 2)} (${n.slice(2, 4)}) ${n.slice(4, 9)}-${n.slice(9)}`;
}

import siteJson from "@/content/site.json";
import timelineJson from "@/content/timeline.json";
import creditosJson from "@/content/creditos.json";
import midiaJson from "@/content/midia.json";
import type {
  Credit,
  MediaAppearance,
  SiteContent,
  TimelineItem,
} from "@/types/content";

export const site: SiteContent = siteJson;
export const timeline: TimelineItem[] = timelineJson;
export const creditos: Credit[] = creditosJson;
export const midia: MediaAppearance[] = midiaJson as MediaAppearance[];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/bio", label: "Bio" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
] as const;

export function whatsappUrl(message = site.contact.whatsappMessage) {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function whatsappDisplay() {
  const n = site.contact.whatsapp;
  if (n.length !== 13) return `+${n}`;
  return `+${n.slice(0, 2)} (${n.slice(2, 4)}) ${n.slice(4, 9)}-${n.slice(9)}`;
}

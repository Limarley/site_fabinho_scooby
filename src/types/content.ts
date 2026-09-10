export type SocialLinks = {
  instagram: string;
  spotify: string;
};

export type ContactInfo = {
  email: string;
  /** Número no formato internacional, somente dígitos. Ex: 5571999999999 */
  whatsapp: string;
  whatsappMessage: string;
};

export type Highlight = {
  id: string;
  value: string;
  label: string;
};

export type Project = {
  id: string;
  name: string;
  role: string;
  description: string;
  url?: string;
};

export type Education = {
  id: string;
  period: string;
  institution: string;
  description: string;
};

export type SiteContent = {
  name: string;
  fullName: string;
  roles: string[];
  tagline: string;
  location: string;
  born: string;
  heroDescription: string;
  bioShort: string;
  bioLong: string[];
  whoIs: string[];
  highlights: Highlight[];
  education: Education[];
  projects: Project[];
  endorsement: { brand: string; description: string };
  contact: ContactInfo;
  social: SocialLinks;
  pressPhoto: { src: string; alt: string; download: string };
  featuredVideo: { youtubeId: string; title: string; caption: string };
};

export type TimelineItem = {
  id: string;
  period: string;
  title: string;
  description: string;
  /** Marcos com maior destaque visual na linha do tempo */
  featured?: boolean;
};

export type Credit = {
  id: string;
  artist: string;
  work: string;
  role: string;
  year?: string;
};

export type MediaAppearance = {
  id: string;
  name: string;
  kind: "tv" | "outlet";
  network?: string;
};

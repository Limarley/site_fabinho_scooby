export type SocialLinks = {
  instagram: string;
  spotify: string;
};

export type ContactInfo = {
  email: string;
  /** Número no formato internacional, somente dígitos. Vazio = oculto. */
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
  /** Copy da Home — seção “Quem é o Scooby”, presente primeiro. */
  homeQuem: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  highlights: Highlight[];
  education: Education[];
  projects: Project[];
  /** Oferta da seção Portfólio — equivalente a aulas/produtos do PRD SPA, sem preço placeholder. */
  offers: {
    id: string;
    name: string;
    topics: string[];
    description: string;
    href: string;
    image: string;
  }[];
  endorsement: { brand: string; description: string };
  contact: ContactInfo;
  social: SocialLinks;
  pressPhoto: { src: string; alt: string };
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
  /** Função no trabalho. Omitir quando o crédito for só disco + faixa. */
  role?: string;
  /** Disco ou álbum em que a faixa entrou. */
  album?: string;
  year?: string;
  /** Link da faixa no Spotify, quando houver. */
  spotify?: string;
};

export type MediaAppearance = {
  id: string;
  name: string;
  kind: "tv" | "outlet";
  network?: string;
};

export type AgoraItem = {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
};

export type ProducerContent = {
  title: string;
  description: string;
  points: string[];
};

export type PortfolioCategory = "shows" | "333" | "estudio" | "instagram";

export type PortfolioItem = {
  id: string;
  category: PortfolioCategory;
  src: string;
  alt: string;
  caption?: string;
};

export type Featured333 = {
  clipYoutubeId: string;
  clipTitle: string;
  clipCaption: string;
  makingOf: { youtubeId: string; title: string }[];
};

export type FeaturedInstagram = {
  url: string;
  handle: string;
  label: string;
};

export type FeaturedPodcast = {
  youtubeId: string;
  title: string;
  caption: string;
};

export type PortfolioContent = {
  featured333: Featured333;
  featuredPodcast: FeaturedPodcast;
  instagram: FeaturedInstagram;
  items: PortfolioItem[];
};

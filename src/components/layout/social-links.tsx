import { Instagram } from "lucide-react";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

function SpotifyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.59 14.42a.62.62 0 0 1-.86.21c-2.35-1.44-5.31-1.76-8.8-.97a.62.62 0 1 1-.28-1.21c3.81-.87 7.08-.5 9.73 1.12.3.18.39.56.21.85Zm1.22-2.72a.78.78 0 0 1-1.07.26c-2.69-1.65-6.79-2.13-9.97-1.17a.78.78 0 0 1-.45-1.49c3.63-1.1 8.15-.57 11.24 1.33.36.22.48.7.25 1.07Zm.1-2.83c-3.23-1.92-8.55-2.1-11.63-1.16a.93.93 0 1 1-.54-1.79c3.54-1.07 9.42-.87 13.13 1.34a.93.93 0 0 1-.96 1.61Z" />
    </svg>
  );
}

const socials = [
  { id: "instagram", label: "Instagram", href: site.social.instagram, Icon: Instagram },
  { id: "spotify", label: "Spotify", href: site.social.spotify, Icon: SpotifyIcon },
] as const;

type Props = {
  className?: string;
  size?: "md" | "lg";
  /** outline: círculo com borda (padrão). solid: quadrado preto com ícone claro (hero). */
  variant?: "outline" | "solid";
  direction?: "row" | "col";
};

export function SocialLinks({
  className,
  size = "md",
  variant = "outline",
  direction = "row",
}: Props) {
  return (
    <ul
      className={cn("flex items-center gap-2", direction === "col" && "flex-col", className)}
      aria-label="Redes sociais"
    >
      {socials.map(({ id, label, href, Icon }) => (
        <li key={id}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} de Fabinho Scooby (abre em nova aba)`}
            className={cn(
              "inline-flex items-center justify-center transition-colors",
              variant === "outline" &&
                "rounded-full border border-border text-foreground/80 hover:border-ink hover:text-ink",
              variant === "solid" &&
                "rounded-lg bg-ink text-accent-fg hover:bg-accent-soft",
              size === "lg" ? "size-12 [&_svg]:size-5" : "size-10 [&_svg]:size-4",
            )}
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}

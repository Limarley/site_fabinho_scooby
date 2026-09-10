import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { YouTubeFacade } from "@/components/sections/youtube-facade";
import { site } from "@/lib/content";

/**
 * Player de destaque. Carrega o YouTube só após o clique (facade),
 * preservando LCP e Core Web Vitals.
 */
export function MediaEmbed({ className }: { className?: string }) {
  const { youtubeId, title, caption } = site.featuredVideo;
  return (
    <Section
      id="player"
      className={className}
      eyebrow="Em destaque"
      title={title}
      description={caption}
    >
      <Reveal>
        <YouTubeFacade videoId={youtubeId} title={title} />
      </Reveal>
    </Section>
  );
}

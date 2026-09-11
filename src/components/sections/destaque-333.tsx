import { Reveal } from "@/components/ui/reveal";
import { YouTubeFacade } from "@/components/sections/youtube-facade";
import type { Featured333 } from "@/types/content";

export function Destaque333({ featured }: { featured: Featured333 }) {
  const makingOf = featured.makingOf.filter((v) => v.youtubeId.trim().length > 0);
  const hasMakingOf = makingOf.length > 0;

  return (
    <div className={hasMakingOf ? "grid gap-6 lg:grid-cols-[1.4fr_1fr]" : undefined}>
      <Reveal>
        <YouTubeFacade videoId={featured.clipYoutubeId} title={featured.clipTitle} />
      </Reveal>
      {hasMakingOf && (
        <div className="flex flex-col gap-4">
          {makingOf.map((video, i) => (
            <Reveal key={video.youtubeId} delay={0.08 * (i + 1)}>
              <YouTubeFacade videoId={video.youtubeId} title={video.title} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}

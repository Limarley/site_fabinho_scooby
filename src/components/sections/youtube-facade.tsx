"use client";

import { useState } from "react";
import { Play } from "lucide-react";

type Props = {
  videoId: string;
  title: string;
};

export function YouTubeFacade({ videoId, title }: Props) {
  const [playing, setPlaying] = useState(false);
  const hasVideo = videoId.trim().length > 0;

  return (
    <div className="frame relative aspect-video w-full overflow-hidden bg-surface">
      {playing && hasVideo ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 size-full"
        />
      ) : (
        <button
          type="button"
          disabled={!hasVideo}
          onClick={() => setPlaying(true)}
          aria-label={hasVideo ? `Reproduzir: ${title}` : "Vídeo em breve"}
          className="group absolute inset-0 flex size-full flex-col items-center justify-center gap-4 bg-[radial-gradient(60%_80%_at_50%_50%,rgb(10_10_10/0.06),transparent)] disabled:cursor-default"
        >
          <span className="inline-flex size-20 items-center justify-center rounded-full bg-accent text-accent-fg transition-transform group-hover:scale-105 group-disabled:opacity-60">
            <Play className="ml-1 size-8" fill="currentColor" />
          </span>
          <span className="text-sm font-medium text-muted">
            {hasVideo ? "Assistir no YouTube" : "Vídeo em breve"}
          </span>
        </button>
      )}
    </div>
  );
}

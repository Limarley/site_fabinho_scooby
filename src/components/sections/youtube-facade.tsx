"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

type Props = {
  videoId: string;
  title: string;
};

/**
 * Facade do YouTube: mostra a thumbnail oficial e só injeta o iframe após o clique,
 * preservando LCP e Core Web Vitals. Sem videoId, exibe o estado "em breve".
 */
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
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 size-full"
        />
      ) : (
        <button
          type="button"
          disabled={!hasVideo}
          onClick={() => setPlaying(true)}
          aria-label={hasVideo ? `Reproduzir: ${title}` : "Vídeo em breve"}
          className="group absolute inset-0 flex size-full flex-col items-center justify-center gap-4 disabled:cursor-default"
        >
          {hasVideo && (
            <Image
              src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
              alt=""
              fill
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          )}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_50%,rgb(10_10_10/0.35),rgb(10_10_10/0.15))]"
          />
          <span className="relative inline-flex size-20 items-center justify-center rounded-full bg-accent-fg text-ink shadow-xl transition-transform group-hover:scale-105 group-disabled:opacity-60">
            <Play className="ml-1 size-8" fill="currentColor" />
          </span>
          <span className="relative text-sm font-medium text-accent-fg">
            {hasVideo ? "Assistir no YouTube" : "Vídeo em breve"}
          </span>
        </button>
      )}
    </div>
  );
}

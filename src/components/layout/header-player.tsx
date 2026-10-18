"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Script from "next/script";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import playlist from "@/content/playlist.json";

interface SpotifyPlaybackUpdate {
  data: {
    isPaused: boolean;
    isBuffering: boolean;
    duration: number;
    position: number;
    playingURI: string;
  };
}

interface SpotifyEmbedController {
  togglePlay: () => void;
  play: () => void;
  seek: (seconds: number) => void;
  loadEntity: (uri: string, preferVideo?: boolean, startAt?: number) => void;
  destroy: () => void;
  addListener: (event: "playback_update", callback: (e: SpotifyPlaybackUpdate) => void) => void;
}

interface SpotifyIFrameAPI {
  createController: (
    element: HTMLElement,
    options: { uri: string; width?: number; height?: number },
    callback: (controller: SpotifyEmbedController) => void,
  ) => void;
}

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (IFrameAPI: SpotifyIFrameAPI) => void;
  }
}

function formatTime(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

interface PlayerState {
  ready: boolean;
  isPaused: boolean;
  position: number;
  duration: number;
  current: (typeof playlist)[number];
  togglePlay: () => void;
  prev: () => void;
  next: () => void;
  seek: (ratio: number) => void;
}

const PlayerContext = createContext<PlayerState | null>(null);

export function HeaderPlayerProvider({ children }: { children: ReactNode }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<SpotifyEmbedController | null>(null);
  const trackIndexRef = useRef(0);
  const trackEndedRef = useRef(false);
  const loadTokenRef = useRef(0);
  const playTimeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [ready, setReady] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(playlist[0].duration);
  const [trackIndex, setTrackIndex] = useState(0);

  const goToTrack = (index: number) => {
    const track = playlist[index];
    if (!track || !controllerRef.current) return;
    trackEndedRef.current = false;
    trackIndexRef.current = index;
    setTrackIndex(index);
    setPosition(0);
    setDuration(track.duration);
    controllerRef.current.loadEntity(track.uri);

    playTimeoutsRef.current.forEach(clearTimeout);
    const loadToken = ++loadTokenRef.current;
    playTimeoutsRef.current = [150, 500, 1200].map((delay) =>
      setTimeout(() => {
        if (loadTokenRef.current === loadToken) controllerRef.current?.play();
      }, delay),
    );
  };

  const prev = () => goToTrack((trackIndexRef.current - 1 + playlist.length) % playlist.length);
  const next = () => goToTrack((trackIndexRef.current + 1) % playlist.length);

  useEffect(() => {
    let cancelled = false;

    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      if (!mountRef.current || cancelled) return;
      IFrameAPI.createController(
        mountRef.current,
        { uri: playlist[0].uri, width: 1, height: 1 },
        (controller) => {
          if (cancelled) {
            controller.destroy();
            return;
          }
          controllerRef.current = controller;
          controller.addListener("playback_update", (e) => {
            const { isPaused: paused, position: pos, duration: dur } = e.data;
            setIsPaused(paused);
            setPosition(pos);
            if (dur > 0) setDuration(dur);

            const nearEnd = dur > 1000 && pos >= dur - 1000;
            if (nearEnd && paused) {
              if (!trackEndedRef.current) {
                trackEndedRef.current = true;
                next();
              }
            } else {
              trackEndedRef.current = false;
            }
          });
          setReady(true);
        },
      );
    };

    return () => {
      cancelled = true;
      playTimeoutsRef.current.forEach(clearTimeout);
      controllerRef.current?.destroy();
      controllerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const seek = (ratio: number) => {
    if (!controllerRef.current || duration <= 0) return;
    controllerRef.current.seek((ratio * duration) / 1000);
  };

  const value: PlayerState = {
    ready,
    isPaused,
    position,
    duration,
    current: playlist[trackIndex],
    togglePlay: () => controllerRef.current?.togglePlay(),
    prev,
    next,
    seek,
  };

  return (
    <PlayerContext.Provider value={value}>
      <Script src="https://open.spotify.com/embed/iframe-api/v1" strategy="afterInteractive" />
      <div
        ref={mountRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          opacity: 0,
          pointerEvents: "none",
        }}
      />
      {children}
    </PlayerContext.Provider>
  );
}

function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used within HeaderPlayerProvider");
  return ctx;
}

export function PlayerControls({ className }: { className?: string }) {
  const { ready, isPaused, togglePlay, prev, next } = usePlayer();
  return (
    <div className={className ?? "flex shrink-0 items-center gap-1"}>
      <button
        type="button"
        onClick={prev}
        disabled={!ready}
        aria-label="Faixa anterior"
        className="inline-flex size-6 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface-2 disabled:opacity-40"
      >
        <SkipBack className="size-3" fill="currentColor" />
      </button>

      <button
        type="button"
        onClick={togglePlay}
        disabled={!ready}
        aria-label={isPaused ? "Tocar" : "Pausar"}
        className="inline-flex size-7 items-center justify-center rounded-full bg-ink text-accent-fg transition-opacity hover:bg-accent-soft disabled:opacity-40"
      >
        {isPaused ? (
          <Play className="size-3 translate-x-[1px]" fill="currentColor" />
        ) : (
          <Pause className="size-3" fill="currentColor" />
        )}
      </button>

      <button
        type="button"
        onClick={next}
        disabled={!ready}
        aria-label="Próxima faixa"
        className="inline-flex size-6 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface-2 disabled:opacity-40"
      >
        <SkipForward className="size-3" fill="currentColor" />
      </button>
    </div>
  );
}

export function PlayerName({ className }: { className?: string }) {
  const { current } = usePlayer();
  return (
    <p className={className ?? "max-w-32 truncate text-xs font-medium text-foreground"}>
      {current.title}
      <span className="text-muted"> · {current.artist}</span>
    </p>
  );
}

export function PlayerTimeline({ className }: { className?: string }) {
  const { position, duration, seek } = usePlayer();
  const progress = duration > 0 ? Math.min(1, position / duration) : 0;

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    seek(ratio);
  };

  return (
    <div className={className ?? "flex w-32 shrink-0 items-center gap-1.5"}>
      <span className="w-7 shrink-0 text-right text-[10px] tabular-nums text-muted">
        {formatTime(position)}
      </span>
      <div onClick={handleSeek} className="relative h-1 flex-1 cursor-pointer rounded-full bg-border">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-ink"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <span className="w-7 shrink-0 text-[10px] tabular-nums text-muted">
        {formatTime(duration)}
      </span>
    </div>
  );
}

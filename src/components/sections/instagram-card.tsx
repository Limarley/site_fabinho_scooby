import { ArrowUpRight, Instagram } from "lucide-react";
import type { FeaturedInstagram } from "@/types/content";

/** Atalho para o perfil oficial — o feed do Instagram não é espelhado no site. */
export function InstagramCard({ profile }: { profile: FeaturedInstagram }) {
  return (
    <a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer me"
      className="group flex items-center justify-between gap-6 rounded-[2rem] border border-border bg-surface/60 p-6 transition-colors hover:border-accent sm:p-8"
    >
      <div className="flex items-center gap-4">
        <span className="inline-flex size-12 items-center justify-center rounded-xl bg-ink text-accent-fg">
          <Instagram aria-hidden="true" className="size-5" />
        </span>
        <span>
          <span className="block font-display text-xl font-bold">{profile.label}</span>
          <span className="mt-1 block text-sm text-muted">{profile.handle} no Instagram</span>
        </span>
      </div>
      <span className="inline-flex items-center gap-1 text-sm font-semibold group-hover:text-accent">
        Abrir perfil
        <ArrowUpRight className="size-4" />
      </span>
    </a>
  );
}

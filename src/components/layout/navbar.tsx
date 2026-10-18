"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Brand } from "@/components/layout/brand";
import {
  HeaderPlayerProvider,
  PlayerControls,
  PlayerName,
  PlayerTimeline,
} from "@/components/layout/header-player";

type SectionId = (typeof navLinks)[number]["id"];

function sectionFromScroll(): SectionId {
  const ids = navLinks.map((link) => link.id);
  const probe = 96;
  let current: SectionId = ids[0];

  for (const id of ids) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= probe) current = id;
  }

  const scrolledToEnd =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 48;
  if (scrolledToEnd) return ids[ids.length - 1];
  return current;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<SectionId>(navLinks[0].id);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      setScrolled(window.scrollY > 12);
      setActive(sectionFromScroll());
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "bg-background",
      )}
    >
      <HeaderPlayerProvider>
        <nav
          aria-label="Principal"
          className="container-site relative flex h-16 items-center justify-between sm:h-20"
        >
          <Brand />

          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 sm:hidden">
            <PlayerControls />
          </div>

          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-3 sm:flex">
            <PlayerName className="hidden max-w-32 truncate text-xs font-medium text-foreground lg:block" />
            <PlayerControls />
            <PlayerTimeline />
          </div>

          <div className="flex items-center gap-1">
            <ul className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => {
                const isActive = active === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      aria-current={isActive ? "true" : undefined}
                      onClick={() => setActive(link.id)}
                      className={cn(
                        "relative rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-foreground",
                        isActive ? "text-foreground" : "text-muted",
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-ink"
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border"
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </nav>
      </HeaderPlayerProvider>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-background/95 backdrop-blur-md md:hidden"
      >
        <ul className="container-site flex flex-col py-4">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  onClick={close}
                  className={cn(
                    "flex items-center justify-between py-4 text-2xl heading-display border-b border-border/60",
                    isActive ? "text-ink" : "text-muted",
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Brand } from "@/components/layout/brand";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "bg-background",
      )}
    >
      <nav
        aria-label="Principal"
        className="container-site flex h-16 items-center justify-between sm:h-20"
      >
        <Brand />

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-foreground",
                    active ? "text-foreground" : "text-muted",
                  )}
                >
                  {link.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-ink"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="/contato">Contato</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-background/95 backdrop-blur-md md:hidden"
      >
        <ul className="container-site flex flex-col py-4">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between py-4 text-2xl heading-display border-b border-border/60",
                    active ? "text-ink" : "text-muted",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-5">
            <Button asChild size="lg" className="w-full">
              <Link href="/contato">Fale com o Fabinho</Link>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { agora } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Agora({ variant = "light" }: { variant?: "light" | "ink" }) {
  const ink = variant === "ink";

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {agora.map((item, i) => (
        <li key={item.id} className="h-full">
          <Reveal
            delay={i * 0.08}
            className={cn(
              "group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6",
              ink ? "border-accent-fg/20" : "border-border",
            )}
          >
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-black/60 transition-colors group-hover:bg-black/50"
            />
            <div className="relative">
              <p className="heading-display text-3xl text-white">{item.name}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/70">
                {item.role}
              </p>
              <p className="copy-justify mt-4 text-sm text-white/85 sm:text-base">
                {item.description}
              </p>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

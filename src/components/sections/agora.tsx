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
              "flex h-full flex-col rounded-2xl border p-6",
              ink
                ? "border-accent-fg/20 bg-accent-fg/5"
                : "border-border bg-surface/60",
            )}
          >
            <p className="heading-display text-3xl">{item.name}</p>
            <p
              className={cn(
                "mt-2 text-xs uppercase tracking-[0.18em]",
                ink ? "text-accent-fg/55" : "text-accent",
              )}
            >
              {item.role}
            </p>
            <p
              className={cn(
                "copy-justify mt-4 text-sm sm:text-base",
                ink ? "text-accent-fg/70" : "text-muted",
              )}
            >
              {item.description}
            </p>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

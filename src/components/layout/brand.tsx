import Link from "next/link";
import { cn } from "@/lib/utils";

/** Assinatura "● Fabinho Scooby" usada na navbar e no rodapé (referência do mockup). */
export function Brand({ className, size = "md" }: { className?: string; size?: "md" | "lg" }) {
  return (
    <Link
      href="/#home"
      aria-label="Fabinho Scooby — início"
      className={cn(
        "inline-flex items-center gap-2.5 font-semibold tracking-tight",
        size === "lg" ? "text-lg" : "text-sm sm:text-base",
        className,
      )}
    >
      <span aria-hidden="true" className="size-2 rounded-full bg-ink" />
      Fabinho Scooby
    </Link>
  );
}

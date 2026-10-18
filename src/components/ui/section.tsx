import * as React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section"> & {
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Alinha o cabeçalho ao centro */
  centered?: boolean;
};

export function Section({
  eyebrow,
  title,
  description,
  centered,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-16 sm:py-24 scroll-mt-[90px] sm:scroll-mt-20", className)}
      {...props}
    >
      <div className="container-site">
        {(eyebrow || title || description) && (
          <header
            className={cn(
              "mb-10 max-w-2xl sm:mb-14",
              centered && "mx-auto text-center",
            )}
          >
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            {title && (
              <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base text-muted sm:text-lg">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="container-site pt-32 pb-12 sm:pt-40 sm:pb-16">
      <p className="eyebrow mb-4">Fabinho Scooby</p>
      <h1 className="heading-display text-5xl sm:text-6xl md:text-7xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
        {description}
      </p>
    </header>
  );
}

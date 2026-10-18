import Link from "next/link";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SocialLinks } from "@/components/layout/social-links";
import { emailHref, whatsappUrl } from "@/lib/content";
import { cn } from "@/lib/utils";

export function CtaContato({
  title = "Vamos trabalhar juntos?",
  description = "Bookings, direção musical, produção, arranjos e parcerias. Fale direto com o Fabinho.",
  variant = "contained",
}: {
  title?: string;
  description?: string;
  /** `band`: bloco full-bleed da Home. `contained`: cartão nas páginas internas. */
  variant?: "contained" | "band";
}) {
  const isBand = variant === "band";

  const actions = (
    <div className={cn("flex flex-col gap-3", "lg:items-end")}>
      <Button
        asChild
        size="lg"
        className="w-full bg-accent-fg text-ink hover:bg-white sm:w-auto"
      >
        <Link href="/#contato">
          {isBand ? "Começar agora" : "Ir para Contato"}
          <ArrowRight />
        </Link>
      </Button>
      <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
        {emailHref() ? (
          <Button
            asChild
            variant="outline"
            className="w-full border-accent-fg/40 text-accent-fg hover:border-accent-fg hover:text-accent-fg sm:w-auto"
          >
            <a href={emailHref()!}>
              <Mail />
              E-mail
            </a>
          </Button>
        ) : null}
        {whatsappUrl() ? (
          <Button
            asChild
            variant="outline"
            className="w-full border-accent-fg/40 text-accent-fg hover:border-accent-fg hover:text-accent-fg sm:w-auto"
          >
            <a href={whatsappUrl()!} target="_blank" rel="noopener noreferrer">
              <MessageCircle />
              WhatsApp
            </a>
          </Button>
        ) : null}
      </div>
    </div>
  );

  const copy = (
    <div>
      <p className={cn("eyebrow mb-4", isBand ? "text-accent-fg/55" : "text-accent-fg/60")}>
        Contato
      </p>
      <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl">{title}</h2>
      <p className={cn("mt-5 max-w-lg sm:text-lg", isBand ? "text-accent-fg/70" : "text-muted")}>
        {description}
      </p>
      {isBand && (
        <div className="mt-8">
          <SocialLinks variant="solid" />
        </div>
      )}
    </div>
  );

  return (
    <section
      className={cn(
        "scroll-mt-[90px] sm:scroll-mt-20",
        isBand ? "bg-ink text-accent-fg" : "py-16 sm:py-24",
      )}
    >
      <div className={cn(isBand ? "container-site py-20 sm:py-28" : "container-site")}>
        {isBand ? (
          <Reveal className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            {copy}
            {actions}
          </Reveal>
        ) : (
          <Reveal className="frame relative overflow-hidden bg-ink p-8 text-accent-fg sm:p-12 lg:p-16 [&_.eyebrow]:text-accent-fg/60 [&_.text-muted]:text-accent-fg/70">
            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              {copy}
              {actions}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

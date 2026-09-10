import Link from "next/link";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { site, whatsappUrl } from "@/lib/content";

export function CtaContato({
  title = "Vamos trabalhar juntos?",
  description = "Bookings, direção musical, produção, arranjos e parcerias. Fale direto com o Fabinho.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-site">
        <Reveal className="frame relative overflow-hidden bg-ink p-8 text-accent-fg sm:p-12 lg:p-16 [&_.eyebrow]:text-accent-fg/60 [&_.text-muted]:text-accent-fg/70">
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="eyebrow mb-4">Contato</p>
              <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl">
                {title}
              </h2>
              <p className="mt-5 max-w-lg text-muted sm:text-lg">{description}</p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Button
                asChild
                size="lg"
                className="w-full bg-accent-fg text-ink hover:bg-white sm:w-auto"
              >
                <Link href="/contato">
                  Ir para Contato
                  <ArrowRight />
                </Link>
              </Button>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-accent-fg/40 text-accent-fg hover:border-accent-fg hover:text-accent-fg sm:w-auto"
                >
                  <a href={`mailto:${site.contact.email}`}>
                    <Mail />
                    E-mail
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-accent-fg/40 text-accent-fg hover:border-accent-fg hover:text-accent-fg sm:w-auto"
                >
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

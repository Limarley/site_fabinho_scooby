import type { Metadata } from "next";
import { Mail, MessageCircle, Clock3 } from "lucide-react";
import { PageHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SocialLinks } from "@/components/layout/social-links";
import { ContactForm } from "@/components/sections/contact-form";
import { site, whatsappDisplay, whatsappUrl } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contato",
  description:
    "Fale com Fabinho Scooby para shows, direção musical, produção, arranjos, imprensa e parcerias. Formulário, e-mail e WhatsApp.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <>
      <PageHeader
        title="Contato"
        description="Bookings, direção musical, produção e parcerias. Escolha o canal: formulário, e-mail ou WhatsApp."
      />

      <section className="container-site pb-24" aria-labelledby="contato-form-title">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal>
            <h2 id="contato-form-title" className="sr-only">
              Formulário de contato
            </h2>
            <div className="relative rounded-[2rem] border border-border bg-surface/60 p-6 sm:p-8 lg:p-10">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div>
              <p className="eyebrow">Contato direto</p>
              <h2 className="mt-3 heading-display text-3xl sm:text-4xl">
                Prefere falar agora?
              </h2>
            </div>

            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-accent"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Mail aria-hidden="true" className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-muted">
                      E-mail
                    </span>
                    <span className="mt-1 block font-display text-lg font-bold group-hover:text-accent">
                      {site.contact.email}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-accent"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <MessageCircle aria-hidden="true" className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-muted">
                      WhatsApp
                    </span>
                    <span className="mt-1 block font-display text-lg font-bold group-hover:text-accent">
                      {whatsappDisplay()}
                    </span>
                    <span className="mt-1 block text-sm text-muted">
                      Abre uma conversa com mensagem pronta.
                    </span>
                  </span>
                </a>
              </li>
            </ul>

            <div className="flex items-start gap-3 rounded-2xl border border-border/60 p-5 text-sm text-muted">
              <Clock3 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
              <p>
                Base em {site.location}. Respostas em até 2 dias úteis; para datas próximas, prefira
                o WhatsApp.
              </p>
            </div>

            <div>
              <p className="eyebrow mb-3">Redes</p>
              <SocialLinks size="lg" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { Mail, MessageCircle, Clock3 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SocialLinks } from "@/components/layout/social-links";
import { ContactForm } from "@/components/sections/contact-form";
import { site, whatsappDisplay, whatsappUrl } from "@/lib/content";

export function Contato({ defaultProjectType }: { defaultProjectType?: string }) {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="scroll-mt-20 bg-ink text-accent-fg"
    >
      <div className="container-site py-20 sm:py-28">
        <header className="mb-10 max-w-2xl sm:mb-14">
          <p className="eyebrow mb-3 text-accent-fg/55">Contato</p>
          <h2 id="contato-title" className="heading-display text-4xl sm:text-5xl md:text-6xl">
            Começar agora
          </h2>
          <p className="mt-5 max-w-lg text-accent-fg/70 sm:text-lg">
            Bookings, produção, aulas de #TECLADISMO e parcerias. Formulário, e-mail ou WhatsApp.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal>
            <div className="rounded-[2rem] border border-accent-fg/20 bg-accent-fg p-6 text-ink sm:p-8 lg:p-10">
              <ContactForm defaultProjectType={defaultProjectType} />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div>
              <p className="eyebrow text-accent-fg/55">Contato direto</p>
              <h3 className="mt-3 heading-display text-3xl sm:text-4xl">Prefere falar agora?</h3>
            </div>

            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="group flex items-start gap-4 rounded-2xl border border-accent-fg/20 p-5 transition-colors hover:border-accent-fg"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-fg/10">
                    <Mail aria-hidden="true" className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-accent-fg/55">
                      E-mail
                    </span>
                    <span className="mt-1 block font-display text-lg font-bold group-hover:text-white">
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
                  className="group flex items-start gap-4 rounded-2xl border border-accent-fg/20 p-5 transition-colors hover:border-accent-fg"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-fg/10">
                    <MessageCircle aria-hidden="true" className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-accent-fg/55">
                      WhatsApp
                    </span>
                    <span className="mt-1 block font-display text-lg font-bold group-hover:text-white">
                      {whatsappDisplay()}
                    </span>
                    <span className="mt-1 block text-sm text-accent-fg/60">
                      Abre uma conversa com mensagem pronta.
                    </span>
                  </span>
                </a>
              </li>
            </ul>

            <div className="flex items-start gap-3 rounded-2xl border border-accent-fg/15 p-5 text-sm text-accent-fg/65">
              <Clock3 aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
              <p>
                Base em {site.location}. Respostas em até 2 dias úteis; para datas próximas,
                prefira o WhatsApp.
              </p>
            </div>

            <div>
              <p className="eyebrow mb-3 text-accent-fg/55">Redes</p>
              <SocialLinks variant="solid" size="lg" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

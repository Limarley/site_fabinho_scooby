# PRD — Site Institucional / Portfólio Artístico
## Fabinho Scooby — Tecladista, Diretor Musical e Produtor

**Versão:** 2.0
**Data:** 10/09/2026
**Autor:** Produto/Design
**Status:** Rascunho para desenvolvimento

---

## 1. Visão Geral

### 1.1 Iniciativa

```
INICIATIVA
└── Site oficial do Fabinho Scooby
    ├── Fortalecer presença digital
    ├── Apresentar trajetória artística
    ├── Divulgar trabalhos
    ├── Centralizar músicas e projetos
    ├── Disponibilizar material para imprensa
    └── Facilitar contatos profissionais
```

O site oficial é a iniciativa guarda-chuva sob a qual este produto é construído. Os seis objetivos abaixo são o motivo de existir de cada página e funcionalidade — cada item do escopo (seção 2) deve poder ser rastreado até pelo menos um desses objetivos.

| Objetivo | O que significa na prática | Onde se materializa no site |
|---|---|---|
| **Fortalecer presença digital** | Ter um endereço próprio e profissional (fabinhoscooby.com) que centralize a imagem do artista, reduzindo a dependência de redes sociais de terceiros e de perfis desatualizados | Home (identidade visual forte), SEO técnico, domínio próprio, integração com redes sociais |
| **Apresentar trajetória artística** | Contar a história profissional de forma clara e cronológica: de sideman autodidata a diretor musical indicado ao Latin Grammy | Página **Bio** (timeline, formação, marcos de carreira) |
| **Divulgar trabalhos** | Dar visibilidade a créditos, parcerias e produções já realizadas, reforçando autoridade e credibilidade | Página **Bio** (créditos/discografia com Jammil, ATTØØXXA/Carlinhos Brown), grid de mídia/TV |
| **Centralizar músicas e projetos** | Reunir num só lugar os projetos em que Fabinho atua ou é sócio/fundador, hoje espalhados entre bandas, produtora e comunidade | Página **Sobre** (PLUS+, 3h3ads Keys, Tecladismo Brasil), embeds de áudio/vídeo na Home/Bio |
| **Disponibilizar material para imprensa** | Fornecer, num único ponto, informações e ativos prontos para uso por veículos de imprensa, curadores e organizadores de eventos | Kit de imprensa (bio resumida, bio longa, foto em alta resolução, créditos) acessível a partir de Sobre/Bio; contato dedicado |
| **Facilitar contatos profissionais** | Reduzir fricção para bookings, propostas de produção e parcerias comerciais chegarem até Fabinho | Página **Contato** (formulário + e-mail direto + LinkedIn), CTAs de contato nas demais páginas |

### 1.2 Contexto
Criação do site oficial de **Fabinho Scooby Vaccarezza**, tecladista, diretor musical, produtor musical, arranjador, programador, beat maker e educador musical, baseado em Salvador (BA). O site deve funcionar como cartão de visitas profissional para a indústria musical, comunicando trajetória, credenciais e trabalhos de destaque (Jammil e Uma Noites, 30PRAUM, ATTØØXXA/Carlinhos Brown, PLUS+, 3h3ads Keys, Tecladismo Brasil).

Hoje essas informações estão fragmentadas entre redes sociais, releases avulsos e conhecimento de terceiros (produtores, bandas, imprensa). O site consolida esse conteúdo em uma fonte única, atualizável e com identidade visual própria — sustentando as seis frentes da iniciativa listadas acima.

### 1.3 Objetivo do Produto
Construir um site que:
- Apresente a identidade artística e profissional de Fabinho Scooby de forma marcante e sofisticada;
- Comunique credibilidade através de trajetória, créditos e parcerias (indicação ao Latin Grammy, bandas, produtora, endorsements);
- Centralize contato profissional para bookings, produções e parcerias;
- Divulgue projetos próprios (Tecladismo Brasil, PLUS+, 3h3ads Keys);
- Disponibilize material de apoio para imprensa e organizadores de eventos;
- Tenha performance excelente, SEO otimizado e fácil manutenção.

### 1.4 Público-Alvo
- Produtores, gravadoras, diretores musicais e bandas em busca de sideman/produtor;
- Contratantes de eventos, turnês e programas de TV;
- Alunos e profissionais interessados no #tecladismo / Tecladismo Brasil;
- Imprensa musical e curadores de festivais;
- Marcas para parcerias de endorsement (ex: Stay Music).

### 1.5 Métricas de Sucesso (KPIs)
| Métrica | Meta | Objetivo da iniciativa relacionado |
|---|---|---|
| Lighthouse Performance | ≥ 90 | Fortalecer presença digital |
| Lighthouse Accessibility | ≥ 95 | Fortalecer presença digital |
| Tempo de carregamento (LCP) | < 2.5s | Fortalecer presença digital |
| Cliques em "Contato" / e-mail | Acompanhar via analytics | Facilitar contatos profissionais |
| Tráfego orgânico (busca por "Fabinho Scooby") | Crescimento mês a mês | Fortalecer presença digital |
| SEO (indexação Google) | 100% das páginas indexadas | Fortalecer presença digital |
| Downloads/acessos ao material de imprensa | Acompanhar via analytics | Disponibilizar material para imprensa |
| Plays/cliques em embeds de música e vídeo | Acompanhar via analytics | Centralizar músicas e projetos |

---

## 2. Escopo Funcional

### 2.1 Estrutura do Site — 4 Páginas

O site é organizado em **4 páginas principais**, navegáveis a partir de uma navbar fixa presente em todas elas.

| # | Página | Rota | Propósito |
|---|---|---|---|
| 1 | **Home** | `/` | Primeira impressão: hero de impacto, apresentação rápida e ganchos para as demais páginas |
| 2 | **Bio** | `/bio` | Narrativa completa da trajetória: linha do tempo, créditos/discografia e mídia/TV |
| 3 | **Sobre** | `/sobre` | Quem é Fabinho fora dos palcos: formação, atuação, projetos próprios e valores |
| 4 | **Contato** | `/contato` | Canal direto para bookings, produções e parcerias |

#### Página 1 — Home
| Seção | Descrição |
|---|---|
| **Navbar** | Logo/assinatura, links: Home, Bio, Sobre, Contato, CTA "Contato" |
| **Hero** | Nome em tipografia de destaque, atuação (Tecladista · Diretor Musical · Produtor), foto autoral, ícones sociais |
| **Destaques rápidos** | 3–4 números/marcos de prova social (ex: indicação ao Latin Grammy, anos de carreira, bandas, turnês internacionais) |
| **Chamada para Bio** | Teaser da trajetória com link "Conheça a bio completa" |
| **Chamada para projetos próprios** | Menções rápidas a PLUS+, 3h3ads Keys e Tecladismo Brasil, com link para Sobre |
| **CTA de Contato** | Bloco final convidando para contato, com link para `/contato` |
| **Footer** | Copyright, links rápidos, redes |

#### Página 2 — Bio
| Seção | Descrição |
|---|---|
| **Cabeçalho da página** | Título "Bio" + resumo em uma frase |
| **Trajetória / Timeline** | Linha do tempo com marcos: início em 1999, UFBA (2001), Núcleo Moderno (2010), Jammil e Uma Noites (2011–), DVD "Jammil de Todas as Praias", indicação ao Latin Grammy, 30PRAUM |
| **Créditos / Discografia** | Cards com trabalhos: Jammil ("Resenha Do Dread" — composição), ATTØØXXA ("Groove", "Da Favela Pro Asfalto" com Carlinhos Brown — arranjo; "Sai da Frente" — teclado/synth/arranjo) |
| **Mídia / TV** | Grid de aparições: Domingão do Faustão, Xuxa, BBB, Multishow, Caldeirão do Huck, Ana Maria Braga, Fátima Bernardes, Record, Band, SBT |
| **CTA de Contato** | Encerramento da página convidando para `/contato` |

#### Página 3 — Sobre
| Seção | Descrição |
|---|---|
| **Cabeçalho da página** | Título "Sobre" + descrição resumida (bio curta institucional) |
| **Quem é** | Texto pessoal: nascido no Carnaval de 1980, autodidata, base em Salvador |
| **Formação** | UFBA (Oficina de Piano, 2001), Núcleo Moderno de Música com o maestro Bira Marques (2010), Licenciatura em Música pela UCSal, produção musical pela UniCesumar |
| **Atuação** | Tecladista, diretor musical, produtor musical, arranjador, programador, beat maker e educador musical |
| **Projetos próprios** | PLUS+ (produtora, sócio desde 2011), 3h3ads (ThreeHeads) Keys, Tecladismo Brasil / #tecladismo (comunidade) |
| **Endorsement** | Stay Music |
| **Kit de imprensa** | Bloco com bio curta e bio longa em texto pronto para copiar, foto oficial em alta resolução para download e lista de créditos — atende diretamente ao objetivo "Disponibilizar material para imprensa" |
| **CTA de Contato** | Encerramento convidando para `/contato` |

#### Página 4 — Contato
| Seção | Descrição |
|---|---|
| **Cabeçalho da página** | Título "Contato" + frase de chamada |
| **Formulário de contato** | Nome, e-mail, assunto/tipo de projeto, mensagem — envio para contato@fabinhoscooby.com |
| **Contato direto** | E-mail exibido, link para LinkedIn e site oficial |
| **Footer** | Copyright, links rápidos, redes |

### 2.2 Funcionalidades

- [ ] Navbar fixa com as 4 páginas, com indicação visual da página ativa
- [ ] Navegação suave dentro de cada página (scroll/transições entre seções internas)
- [ ] Linha do tempo interativa na página Bio
- [ ] Galeria/grid de créditos e discografia na página Bio, com filtro por artista/projeto (opcional)
- [ ] Grid de logos/aparições em TV e mídia na página Bio
- [ ] Seção dedicada a projetos próprios (PLUS+, 3h3ads Keys, Tecladismo Brasil) na página Sobre
- [ ] Formulário de contato funcional na página Contato (envio de e-mail via API Route para contato@fabinhoscooby.com)
- [ ] Player de destaque (embed de vídeo/áudio de trabalhos, ex: DVD do Jammil, YouTube/Spotify embed) na Home ou Bio, centralizando músicas e projetos
- [ ] Kit de imprensa na página Sobre: bio curta, bio longa, foto em alta resolução para download e créditos em texto pronto para uso
- [ ] Responsividade total (mobile-first)
- [ ] Otimização de imagens e vídeos (lazy loading)
- [ ] SEO técnico (meta tags, Open Graph, sitemap, robots.txt, schema.org Person/MusicGroup) em cada uma das 4 páginas
- [ ] Integração com redes sociais e LinkedIn

### 2.3 Fora de Escopo (v1)
- Loja de beats/plugins (pode ser fase 2, considerando perfil de beat maker/educador)
- Área de membros para o Tecladismo Brasil (tratar como link externo por ora)
- Multilíngue (fase 2, considerando turnês internacionais/Europa/Oceania)
- Blog de conteúdo educacional (avaliar para fase 2, alinhado ao perfil de educador musical)

---

## 3. Conteúdo de Referência (Copy Base)

### 3.1 Identidade
- **Nome artístico:** Fabinho Scooby
- **Nome completo:** Fabinho Scooby Vaccarezza
- **Atuação:** Tecladista, diretor musical, produtor musical, arranjador, programador, beat maker e educador musical
- **Base:** Salvador, Bahia
- **Nascimento:** Carnaval de 1980

### 3.2 Descrição resumida (hero/about)
> "Fabinho Scooby é tecladista, diretor musical e produtor, com trajetória em turnês, estúdios e produções ao lado de nomes de peso da música brasileira. Do teclado à direção musical, uma carreira construída em cima do palco."

### 3.3 Formação
- Autodidata — começou de ouvido, observando
- 2001 — Oficina de Piano da UFBA
- 2010 — Extensão no Núcleo Moderno de Música, com o maestro Bira (Ubiratan) Marques
- Graduando em Licenciatura em Música pela UCSal (Universidade Católica do Salvador)
- Produção musical pela UniCesumar

### 3.4 Trajetória profissional
- Músico profissional desde 1999
- Sideman e freelancer no mercado baiano e nordestino (arrocha a zouk)
- Turnês pelo Brasil, Estados Unidos, Europa e Oceania
- **Jammil e Uma Noites** — tecladista a partir de 2011
  - Formação 2015: Levi Lima (vocal), Beto Martins (bateria), Maguinho (baixo), Fabinho Scooby (teclado), Ariel Rangel (percussão)
  - DVD "Jammil de Todas as Praias" (ao vivo, 2014/2015) — crédito de teclados
  - Compositor em "Resenha Do Dread"
  - Passagens por TV: Domingão do Faustão, Xuxa, BBB, Multishow, Caldeirão do Huck, Ana Maria Braga, Fátima Bernardes, Record, Band, SBT
- **30PRAUM** — tecladista
- Indicado ao **Latin Grammy** (Nominee 12)

### 3.5 Projetos e sociedades
- **PLUS+ (Plus Mais)** — sócio proprietário desde outubro de 2011, atuando como produtor e arranjador
- **3h3ads (ThreeHeads) Keys** — sócio/fundador do projeto musical
- **Tecladismo Brasil / #tecladismo** — idealizador e CEO; comunidade de profissionais de teclado para troca de informação sobre instrumento, software e carreira
- **Stay Music** — endorsee

### 3.6 Créditos selecionados
| Artista/Projeto | Trabalho | Função |
|---|---|---|
| Jammil | "Resenha Do Dread" | Composição |
| ATTØØXXA | "Groove" | Arranjo |
| ATTØØXXA / Carlinhos Brown | "Da Favela Pro Asfalto" | Arranjo |
| ATTØØXXA | "Sai da Frente" | Teclado, synth e arranjo |

### 3.7 Contato
- **E-mail:** contato@fabinhoscooby.com
- **Site:** https://fabinhoscooby.com/
- **LinkedIn:** https://www.linkedin.com/in/fabinho-scooby-vaccarezza-976347146

---

## 4. Requisitos Não Funcionais

| Categoria | Requisito |
|---|---|
| **Performance** | Core Web Vitals dentro do "bom" (verde), inclusive com vídeos/embeds |
| **Acessibilidade** | WCAG 2.1 AA (contraste, navegação por teclado, alt text, legendas se houver vídeo) |
| **SEO** | SSR/SSG, meta tags dinâmicas, schema.org (Person + MusicGroup/PerformingGroup) |
| **Segurança** | Validação de formulário, proteção anti-spam (honeypot/reCAPTCHA) |
| **Manutenibilidade** | Código tipado, componentizado, documentado; fácil adicionar novos créditos/timeline |
| **Compatibilidade** | Últimas 2 versões de Chrome, Firefox, Safari, Edge |
| **Responsividade** | Breakpoints: mobile (360px+), tablet (768px+), desktop (1280px+) |
| **Internacionalização (futura)** | Estrutura de conteúdo preparada para PT/EN, dado histórico de turnês internacionais |

---

## 5. Stack Tecnológica

### 5.1 Core

| Camada | Tecnologia | Justificativa |
|---|---|---|
| **Framework** | **Next.js 15+ (App Router)** | SSR/SSG nativo, ótimo para SEO e performance, roteamento por arquivo, image/video otimizados |
| **Linguagem** | **TypeScript** | Tipagem estática, menos bugs, melhor DX e manutenção |
| **Runtime** | Node.js 20+ | Compatibilidade LTS |
| **Gerenciador de pacotes** | pnpm (ou npm) | Instalação mais rápida e eficiente em disco |

### 5.2 UI / Estilização

| Item | Tecnologia | Justificativa |
|---|---|---|
| **Estilização** | **Tailwind CSS** | Agilidade, consistência de design tokens, fácil responsividade |
| **Componentes UI** | shadcn/ui (Radix + Tailwind) | Componentes acessíveis e customizáveis (botões, forms, modais) |
| **Ícones** | lucide-react | Leve, consistente, tree-shakeable |
| **Tipografia** | next/font (Google Fonts ou fonte local) | Otimização automática de fontes pelo Next.js |
| **Animações** | Framer Motion | Transições suaves, animações de scroll/fade, timeline interativa |

### 5.3 Conteúdo / Mídia

| Item | Tecnologia | Justificativa |
|---|---|---|
| **Gestão de conteúdo** | Sanity.io ou Contentful (CMS headless) *(opcional)* | Permite ao próprio Fabinho atualizar timeline, créditos e mídia sem redeploy |
| **Alternativa simples** | MDX + arquivos locais (JSON para timeline/créditos) | Mais simples para v1, sem custo de CMS |
| **Imagens** | next/image + Cloudinary/Vercel Image Optimization | Otimização automática, formatos WebP/AVIF |
| **Vídeo/Áudio** | Embeds nativos (YouTube/Vimeo para DVD do Jammil, Spotify/Apple Music para faixas) | Sem custo de hospedagem própria de mídia pesada |

### 5.4 Formulário de Contato

| Item | Tecnologia | Justificativa |
|---|---|---|
| **Validação** | Zod + React Hook Form | Validação tipada e performática |
| **Envio de e-mail** | Resend ou Nodemailer via Next.js API Route | Envio para contato@fabinhoscooby.com com boa entregabilidade |
| **Anti-spam** | Google reCAPTCHA v3 ou honeypot | Proteção sem atrito para o usuário |

### 5.5 Infraestrutura

| Item | Tecnologia | Justificativa |
|---|---|---|
| **Hospedagem** | Vercel | Integração nativa com Next.js, deploy contínuo, edge functions |
| **Domínio/DNS** | fabinhoscooby.com (já existente) via Cloudflare ou Vercel Domains | Manter domínio atual do artista |
| **Analytics** | Vercel Analytics + Google Analytics 4 | Métricas de performance e comportamento |
| **Monitoramento de erros** | Sentry | Rastreamento de erros em produção |

### 5.6 Qualidade & DevOps

| Item | Tecnologia | Justificativa |
|---|---|---|
| **Linting** | ESLint + Prettier | Padronização de código |
| **Testes** | Vitest + React Testing Library | Testes unitários/componentes |
| **E2E** | Playwright | Testes end-to-end (fluxo de contato, navegação) |
| **CI/CD** | GitHub Actions + Vercel | Deploy automático em push/PR |
| **Versionamento** | Git + GitHub | Controle de versão e colaboração |

---

## 6. Arquitetura de Pastas (Next.js App Router)

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # 1. Home — Hero + destaques + chamadas
│   ├── bio/
│   │   └── page.tsx                 # 2. Bio — Timeline + Créditos + Mídia/TV
│   ├── sobre/
│   │   └── page.tsx                 # 3. Sobre — Formação, atuação, projetos próprios
│   ├── contato/
│   │   └── page.tsx                 # 4. Contato — Formulário + contato direto
│   └── api/
│       └── contact/route.ts         # API Route para envio de e-mail
├── components/
│   ├── ui/                          # shadcn/ui components
│   ├── layout/                      # Navbar (4 páginas), Footer
│   ├── sections/                    # Hero, Destaques, Timeline, CreditosGrid, MidiaGrid, ProjetosProprios, ContactForm
├── content/
│   ├── timeline.json                 # Marcos da trajetória (usado na Bio)
│   ├── creditos.json                 # Créditos por artista/projeto (usado na Bio)
│   └── midia.json                    # Aparições em TV/mídia (usado na Bio)
├── lib/
│   ├── validations.ts                # Schemas Zod
│   ├── email.ts                      # Integração Resend
│   └── utils.ts
├── types/
│   ├── timeline.ts
│   └── credito.ts
├── public/
│   ├── images/
│   └── fonts/
└── styles/
    └── globals.css
```

---

## 7. Roadmap / Fases

| Fase | Entregas |
|---|---|
| **Fase 1 — Setup** | Configuração do projeto Next.js + TS + Tailwind + shadcn/ui |
| **Fase 2 — Navbar & Layout Base** | Navbar com as 4 páginas, Footer, identidade visual de Fabinho Scooby |
| **Fase 3 — Página Home** | Hero, destaques rápidos, chamadas para Bio/Sobre/Contato |
| **Fase 4 — Página Bio** | Timeline interativa + grid de créditos/discografia + grid de mídia/TV |
| **Fase 5 — Página Sobre** | Formação, atuação, PLUS+, 3h3ads Keys, Tecladismo Brasil, endorsement Stay Music |
| **Fase 6 — Página Contato** | Formulário funcional + envio para contato@fabinhoscooby.com |
| **Fase 7 — Conteúdo Dinâmico** | Integração com CMS (se aplicável) para fácil atualização por Fabinho |
| **Fase 8 — Otimização** | SEO, performance, acessibilidade, analytics nas 4 páginas |
| **Fase 9 — Deploy** | Publicação na Vercel, domínio fabinhoscooby.com, testes finais |

---

## 8. Riscos e Mitigações

| Risco | Mitigação |
|---|---|
| Volume grande de informação (trajetória extensa) poluir a UI | Priorizar timeline/créditos com curadoria dos marcos mais relevantes; "ver mais" progressivo |
| Overload de imagens/vídeos pesados afetando performance | Usar `next/image`, embeds otimizados, lazy loading |
| Complexidade desnecessária com CMS para atualização pouco frequente | Iniciar com JSON local, migrar para CMS se Fabinho precisar atualizar sozinho com frequência |
| Baixo reconhecimento de marca pessoal vs. bandas (Jammil, 30PRAUM) | Deixar claro na Home a assinatura pessoal, com selos/logos das bandas como prova social, não como identidade principal |
| Spam no formulário de contato | reCAPTCHA v3 + honeypot |

---

## 9. Critérios de Aceite (v1)

**Geral**
- [ ] Site com exatamente 4 páginas navegáveis: Home, Bio, Sobre e Contato
- [ ] Navbar presente nas 4 páginas, com destaque visual da página ativa
- [ ] Site responsivo em mobile, tablet e desktop
- [ ] Lighthouse Performance/Acessibilidade/SEO ≥ 90 nas 4 páginas
- [ ] Deploy funcional em ambiente de produção (Vercel) no domínio fabinhoscooby.com

**Home**
- [ ] Hero comunicando claramente nome, atuação e chamada para contato
- [ ] Destaques rápidos de prova social (Latin Grammy, bandas, turnês)
- [ ] Chamadas funcionais para as páginas Bio, Sobre e Contato

**Bio**
- [ ] Timeline com no mínimo os marcos: início em 1999, UFBA (2001), Jammil (2011+), DVD, Latin Grammy, 30PRAUM
- [ ] Seção de créditos com pelo menos os 4 trabalhos listados (Jammil + ATTØØXXA)
- [ ] Grid de aparições em TV/mídia

**Sobre**
- [ ] Texto de formação completo (UFBA, Núcleo Moderno, UCSal, UniCesumar)
- [ ] Seções de projetos próprios (PLUS+, 3h3ads Keys, Tecladismo Brasil, Stay Music)

**Contato**
- [ ] Formulário de contato enviando e-mails com sucesso para contato@fabinhoscooby.com
- [ ] Links funcionais para LinkedIn e site oficial

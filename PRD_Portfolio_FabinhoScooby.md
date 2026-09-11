# PRD — Site Institucional / Portfólio Artístico
## Fabinho Scooby — Tecladista, Diretor Musical e Produtor Musical

**Versão:** 3.0
**Data:** 11/09/2026
**Autor:** Produto/Design
**Status:** v1 publicada · iteração 2 especificada para desenvolvimento

---

## 0. O que mudou da v2.0 para a v3.0

A v1 do site foi construída e publicada com as 4 páginas previstas (Home, Bio, Sobre, Contato). Depois de ver o resultado no ar, duas decisões de produto mudaram o rumo da iteração 2:

| # | Mudança | Motivo |
|---|---|---|
| 1 | **Bio passa a ser liderada pela fase atual da carreira** — 30PRAUM, shows com **WIU** e **Teto**, e atuação como **produtor musical** — em vez de abrir pela origem em 1999 | O material mais relevante para quem contrata hoje (contratantes, produtores, imprensa) é o que Fabinho está fazendo agora. A ordem cronológica crescente enterrava o presente no fim da página |
| 2 | **A página "Sobre" vira "Portfólio"** (`/sobre` → `/portfolio`), deixando de ser uma página de texto institucional para virar uma **página visual**: fotos autorais, fotos do Instagram, imagens de shows, o **clipe do 333** e os **vídeos de making of do 333** | O trabalho de um músico se prova com imagem e som, não com parágrafo. O conteúdo textual do "Sobre" (formação, atuação, projetos, kit de imprensa) é institucional e pertence à Bio |

**Consequência estrutural:** o site continua com 4 páginas, mas com papéis redistribuídos.

| Antes (v2.0) | Depois (v3.0) |
|---|---|
| Home · Bio · Sobre · Contato | Home · Bio · **Portfólio** · Contato |
| Bio = trajetória histórica | Bio = **agora** + trajetória + quem é + imprensa |
| Sobre = formação, projetos, kit de imprensa | Portfólio = **fotos, shows, clipes e making of** |

Também foram atualizados: o conteúdo de referência (seção 3), com WIU, Teto e o reforço do papel de produtor musical; o modelo de dados (seção 4), com a nova coleção de mídia do portfólio; e os critérios de aceite (seção 10).

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

| Objetivo | O que significa na prática | Onde se materializa no site (v3.0) |
|---|---|---|
| **Fortalecer presença digital** | Ter um endereço próprio e profissional (fabinhoscooby.com) que centralize a imagem do artista, reduzindo a dependência de redes sociais de terceiros e de perfis desatualizados | Home (identidade visual forte), SEO técnico, domínio próprio, **Portfólio espelhando o Instagram dentro do próprio domínio** |
| **Apresentar trajetória artística** | Contar a história profissional partindo do presente — tecladista do 30PRAUM, shows com WIU e Teto, produtor musical — e recuando até a origem autodidata | Página **Bio** (fase atual em destaque, timeline, formação, marcos) |
| **Divulgar trabalhos** | Dar visibilidade a créditos, parcerias e produções, reforçando autoridade e credibilidade | Página **Bio** (créditos/discografia, mídia/TV) e página **Portfólio** (registro visual) |
| **Centralizar músicas e projetos** | Reunir num só lugar os projetos em que Fabinho atua ou é sócio/fundador, hoje espalhados entre bandas, produtora e comunidade | Página **Bio** (PLUS+, 3h3ads/333, Tecladismo Brasil) e **Portfólio** (clipe e making of do 333) |
| **Disponibilizar material para imprensa** | Fornecer, num único ponto, informações e ativos prontos para uso por veículos de imprensa, curadores e organizadores de eventos | **Kit de imprensa migrado para a Bio** (bio curta, bio longa, foto em alta, créditos) + fotos em alta no Portfólio |
| **Facilitar contatos profissionais** | Reduzir fricção para bookings, propostas de produção e parcerias comerciais chegarem até Fabinho | Página **Contato** (formulário + e-mail + WhatsApp), CTAs nas demais páginas |

### 1.2 Contexto

Site oficial de **Fabinho Scooby Vaccarezza**, tecladista, diretor musical, produtor musical, arranjador, programador, beat maker e educador musical, baseado em Salvador (BA).

A v1 entregou o cartão de visitas institucional. A iteração 2 responde a um desalinhamento entre o que o site conta e o que Fabinho está vivendo profissionalmente: **o momento atual da carreira é o ativo mais forte que ele tem** — tecladista do **30PRAUM**, tocando atualmente com **WIU** e **Teto**, dois dos maiores nomes do trap/rap brasileiro em circulação, além de atuar como **produtor musical**. Esse material precisa liderar a narrativa, não fechá-la.

Ao mesmo tempo, o volume de registro visual existente (fotos de show, ensaios, fotos publicadas no Instagram, o clipe do **333** e os bastidores de sua produção) não tinha lugar no site. A página "Sobre", predominantemente textual, era o espaço com menor valor marginal — passa a ser o **Portfólio**, uma página feita para ser vista, não lida.

### 1.3 Objetivo do Produto

Construir um site que:

- Comunique com clareza **o que Fabinho faz hoje** (30PRAUM, WIU, Teto, produção musical) logo no primeiro contato;
- Apresente a identidade artística e profissional de forma marcante e sofisticada;
- Comunique credibilidade através de trajetória, créditos e parcerias (indicação ao Latin Grammy, bandas, produtora, endorsements);
- **Prove visualmente** o trabalho, com fotos de palco, registros de estúdio e audiovisual próprio;
- Centralize contato profissional para bookings, produções e parcerias;
- Disponibilize material de apoio para imprensa e organizadores de eventos;
- Tenha performance excelente, SEO otimizado e fácil manutenção.

### 1.4 Público-Alvo

- Produtores, gravadoras, diretores musicais e bandas em busca de sideman/produtor;
- **Artistas e empresários do circuito de rap/trap e pop** (público que chega via 30PRAUM, WIU e Teto);
- Contratantes de eventos, turnês e programas de TV;
- Alunos e profissionais interessados no #tecladismo / Tecladismo Brasil;
- Imprensa musical e curadores de festivais;
- Marcas para parcerias de endorsement (ex: Stay Music).

### 1.5 Métricas de Sucesso (KPIs)

| Métrica | Meta | Objetivo da iniciativa relacionado |
|---|---|---|
| Lighthouse Performance | ≥ 90 (inclusive na página Portfólio, com galeria) | Fortalecer presença digital |
| Lighthouse Accessibility | ≥ 95 | Fortalecer presença digital |
| Tempo de carregamento (LCP) | < 2.5s | Fortalecer presença digital |
| Cliques em "Contato" / e-mail / WhatsApp | Acompanhar via analytics | Facilitar contatos profissionais |
| Tráfego orgânico (busca por "Fabinho Scooby") | Crescimento mês a mês | Fortalecer presença digital |
| SEO (indexação Google) | 100% das páginas indexadas | Fortalecer presença digital |
| Downloads/acessos ao material de imprensa | Acompanhar via analytics | Disponibilizar material para imprensa |
| Plays/cliques em embeds de música e vídeo | Acompanhar via analytics | Centralizar músicas e projetos |
| **Tempo médio na página Portfólio** | > 45s | Divulgar trabalhos |
| **Aberturas do lightbox / itens visualizados por sessão** | ≥ 4 itens | Divulgar trabalhos |
| **Cliques de saída para o Instagram** | Acompanhar via analytics | Fortalecer presença digital |

---

## 2. Escopo Funcional

### 2.1 Estrutura do Site — 4 Páginas

| # | Página | Rota | Propósito | Status |
|---|---|---|---|---|
| 1 | **Home** | `/` | Primeira impressão: hero de impacto, prova social e ganchos para as demais páginas | Entregue · ajustes |
| 2 | **Bio** | `/bio` | Quem é Fabinho e o que faz **hoje**: fase atual, produção musical, trajetória, formação e imprensa | Entregue · **reestruturação** |
| 3 | **Portfólio** | `/portfolio` | Prova visual: fotos, shows, Instagram, clipe do 333 e making of | **Nova** (substitui `/sobre`) |
| 4 | **Contato** | `/contato` | Canal direto para bookings, produções e parcerias | Entregue |

---

### 2.2 Página Bio — reestruturada (`/bio`)

**Princípio editorial:** a página abre no presente e recua no tempo. Quem só ler a primeira dobra precisa sair sabendo que Fabinho é tecladista do 30PRAUM, toca com WIU e Teto e é produtor musical.

| Ordem | Seção | Descrição | Status |
|---|---|---|---|
| 1 | **Cabeçalho da página** | Título "Bio" + frase-resumo reescrita para o presente (ex: *"Tecladista do 30PRAUM, nos palcos com WIU e Teto, e produtor musical em Salvador."*) | Ajuste de copy |
| 2 | **Agora** | **Seção nova e principal.** Bloco de destaque com a fase atual: cards dos artistas/projetos com quem atua hoje — **30PRAUM**, **WIU**, **Teto** — cada um com função exercida (tecladista / direção musical / produção) e período ("Atualmente"). Visual de maior peso da página, acima da timeline | **Novo** |
| 3 | **Produtor musical** | **Seção nova.** O lado de estúdio: produção, arranjo, programação e beat making; o que entrega a um artista que o contrata para produzir; ligação com a produtora PLUS+. Inclui CTA "Quero produzir com o Fabinho" apontando para `/contato` com assunto pré-selecionado | **Novo** |
| 4 | **Trajetória / Timeline** | Linha do tempo **em ordem cronológica decrescente** (do presente para 1999). Marcos: fase atual (30PRAUM, WIU, Teto), indicação ao Latin Grammy, DVD "Jammil de Todas as Praias", Jammil e Uma Noites + PLUS+ (2011), Núcleo Moderno (2010), UFBA (2001), início em 1999 | Inverter ordem + novos marcos |
| 5 | **Créditos / Discografia** | Cards filtráveis por artista/projeto. Além dos atuais (Jammil, ATTØØXXA, Carlinhos Brown), incluir os trabalhos do ciclo atual — **a lista definitiva depende de confirmação do Fabinho** (ver seção 11) | Ampliar conteúdo |
| 6 | **Vídeo em destaque** | Player com facade do YouTube (entrevista COST FLOW #EP014) | Entregue |
| 7 | **Quem é** | **Migrado do Sobre.** Texto pessoal: nascido no Carnaval de 1980, autodidata, base em Salvador. Versão enxuta, em dobra secundária | Migração |
| 8 | **Formação e atuação** | **Migrado do Sobre.** UFBA (2001), Núcleo Moderno com o maestro Bira Marques (2010), Licenciatura em Música pela UCSal, produção musical pela UniCesumar + lista de funções exercidas | Migração |
| 9 | **Projetos próprios** | **Migrado do Sobre.** PLUS+, 3h3ads/333 Keys, Tecladismo Brasil e o endorsement Stay Music | Migração |
| 10 | **Mídia / TV** | Grid de aparições (Domingão do Faustão, Xuxa, BBB, Multishow, Caldeirão do Huck, Ana Maria Braga, Fátima Bernardes, Record, Band, SBT). Rebaixado na hierarquia: é prova social histórica, não a manchete | Reposicionar |
| 11 | **Kit de imprensa** | **Migrado do Sobre.** Bio curta, bio longa, foto oficial em alta para download e créditos em texto pronto para copiar. Âncora `/bio#imprensa` divulgável isoladamente para a imprensa | Migração |
| 12 | **CTA de Contato** | Encerramento convidando para `/contato` | Entregue |

**Requisito de conteúdo:** as bios (curta e longa) e o `heroDescription` precisam ser reescritos para citar 30PRAUM, WIU, Teto e o papel de produtor musical — hoje o texto fala em Jammil e 30PRAUM sem mencionar os dois artistas nem dar peso à produção.

---

### 2.3 Página Portfólio — nova (`/portfolio`)

**Propósito:** ser a prova visual do trabalho. Substitui a antiga página "Sobre" na mesma posição da navbar.

| Ordem | Seção | Descrição |
|---|---|---|
| 1 | **Cabeçalho da página** | Título "Portfólio" + frase de chamada (ex: *"Palco, estúdio e bastidores."*) |
| 2 | **Filtros de categoria** | Barra de filtros no mesmo padrão já usado no grid de créditos: `Tudo · Shows · 333 · Estúdio · Instagram`. Estado acessível (`aria-pressed`), sem recarregar a página |
| 3 | **333 — clipe e making of** | Seção de destaque do projeto: **o clipe** (embed com facade, igual ao player da Home) e os **vídeos de making of**. Cada vídeo com título, descrição curta e duração. Layout: clipe em destaque grande + making of em grade secundária |
| 4 | **Shows** | Galeria de fotos ao vivo em grade tipo *masonry*/mosaico, com legenda de show/local/data quando houver e crédito do fotógrafo |
| 5 | **Instagram** | Grade de fotos selecionadas do Instagram, em formato quadrado, cada item linkando para o post original; bloco final com CTA "Seguir @fabinhoscooby". **Imagens hospedadas localmente** (ver seção 2.3.1) |
| 6 | **Estúdio / bastidores** | Registros de processo: gravação, setup de teclados, produção |
| 7 | **Lightbox** | Visualização ampliada ao clicar em qualquer foto: navegação por teclado (setas, `Esc`), *focus trap*, legenda e crédito visíveis, swipe no mobile |
| 8 | **CTA de Contato** | Encerramento convidando para `/contato` |

#### 2.3.1 Decisões técnicas da galeria

| Tema | Decisão | Justificativa |
|---|---|---|
| **Origem das fotos do Instagram** | Curadoria manual: as imagens são baixadas, otimizadas e versionadas em `public/images/portfolio/`, com link para o post original | As URLs do CDN do Instagram expiram e a Graph API exige token de longa duração e app review. Para o volume atual (dezenas de itens, atualização esporádica) a curadoria manual é mais barata e mais rápida do que a integração |
| **Otimização** | `next/image` com `sizes` correto por breakpoint, formatos AVIF/WebP (já configurado), `placeholder="blur"` e `loading="lazy"` em tudo abaixo da dobra | Meta de Lighthouse ≥ 90 numa página que é essencialmente imagem |
| **Vídeos** | Reusar o componente `YouTubeFacade` já existente: thumbnail primeiro, `<iframe>` só depois do clique, domínio `youtube-nocookie.com` | Evita que N embeds destruam o LCP da página |
| **Paginação** | Grade com "Carregar mais" a partir de ~24 itens, sem scroll infinito | Scroll infinito prejudica o footer e a navegação por teclado |
| **Direitos de imagem** | Todo item pode declarar `credit` (fotógrafo/diretor), exibido no lightbox | Uso profissional de material de terceiros exige crédito |

---

### 2.4 Ajustes nas demais páginas

**Home**
- Teaser de projetos próprios: os links `/sobre#<projeto>` passam a apontar para `/bio#projetos`;
- Novo teaser (ou ajuste do existente) chamando o **Portfólio**, com uma prévia de 3–4 fotos;
- Destaques rápidos: revisar a prova social para refletir a fase atual (30PRAUM/WIU/Teto ao lado do Latin Grammy).

**Contato**
- Adicionar "Produção musical" à lista de tipos de projeto do formulário, se ainda não existir, para capturar a demanda gerada pela nova seção da Bio.

**Navbar e Footer**
- Item "Sobre" passa a se chamar **"Portfólio"** e aponta para `/portfolio`, mantendo a posição (3ª) e o destaque de página ativa.

---

### 2.5 Funcionalidades

Entregues na v1:

- [x] Navbar fixa com as 4 páginas e indicação visual da página ativa
- [x] Linha do tempo interativa na página Bio
- [x] Grid de créditos e discografia com filtro por artista/projeto
- [x] Grid de aparições em TV e mídia
- [x] Seção dedicada a projetos próprios (PLUS+, 3h3ads Keys, Tecladismo Brasil)
- [x] Formulário de contato funcional (API Route + Resend, validação Zod, honeypot, rate limit)
- [x] Player de destaque com facade do YouTube
- [x] Kit de imprensa (bio curta, bio longa, foto em alta, créditos)
- [x] Responsividade total (mobile-first)
- [x] SEO: meta tags, Open Graph, schema.org Person/MusicGroup
- [x] Integração com redes sociais

Escopo desta iteração:

- [ ] Seção "Agora" na Bio, com 30PRAUM, WIU e Teto
- [ ] Seção "Produtor musical" na Bio
- [ ] Timeline em ordem decrescente, com os marcos da fase atual
- [ ] Migração de "Quem é", formação, projetos próprios e kit de imprensa do Sobre para a Bio
- [ ] Reescrita das bios (curta, longa e hero) citando 30PRAUM, WIU, Teto e produção musical
- [ ] Página `/portfolio` com filtros por categoria
- [ ] Galeria de fotos de shows, estúdio e Instagram, com lightbox acessível
- [ ] Seção 333: clipe + vídeos de making of
- [ ] Redirect permanente `/sobre` → `/portfolio`
- [ ] Renomeação do item de navegação em navbar e footer
- [ ] Atualização dos links internos que apontavam para `/sobre`

Pendências herdadas da v1 (fora do foco, mas registradas):

- [ ] `sitemap.ts` e `robots.ts`
- [ ] Imagem de Open Graph (os metadados declaram `summary_large_image` sem imagem definida)
- [ ] LinkedIn nos links sociais
- [ ] Testes automatizados (Vitest/Playwright) e monitoramento de erros

---

### 2.6 Migração `/sobre` → `/portfolio`

| Item | Tratamento |
|---|---|
| Rota antiga | `redirect` permanente (308) de `/sobre` para `/portfolio` em `next.config.ts` — preserva links já compartilhados e sinal de SEO |
| Conteúdo textual | "Quem é", formação, atuação, projetos próprios, endorsement e kit de imprensa migram para a Bio, sem perda de conteúdo |
| Componentes | `ProjetosProprios` e `PressKit` são reaproveitados na Bio sem reescrita |
| Âncoras | `/sobre#projetos`, `/sobre#imprensa` e `/sobre#endorsement` passam a `/bio#...`; o redirect cobre acessos antigos |
| Metadata | Nova `metadata` para `/portfolio` (título, descrição, canonical e Open Graph próprios) |

---

### 2.7 Fora de Escopo (v1 / iteração 2)

- Loja de beats/plugins (fase 2, considerando perfil de beat maker/educador);
- Área de membros para o Tecladismo Brasil (link externo por ora);
- Multilíngue (fase 2, considerando turnês internacionais);
- Blog de conteúdo educacional;
- **Integração automática com a API do Instagram** (curadoria manual na v3, reavaliar se a frequência de atualização justificar);
- **Hospedagem própria de vídeo** (segue via YouTube embed).

---

## 3. Conteúdo de Referência (Copy Base)

### 3.1 Identidade
- **Nome artístico:** Fabinho Scooby
- **Nome completo:** Fabinho Scooby Vaccarezza
- **Atuação:** Tecladista, diretor musical, produtor musical, arranjador, programador, beat maker e educador musical
- **Base:** Salvador, Bahia
- **Nascimento:** Carnaval de 1980

### 3.2 Fase atual da carreira (destaque da Bio)

| Frente | Atuação |
|---|---|
| **30PRAUM** | Tecladista |
| **WIU** | Tecladista nos shows |
| **Teto** | Tecladista nos shows |
| **Produção musical** | Produtor, arranjador, programador e beat maker, também através da produtora PLUS+ |

> Copy de referência para a seção "Agora": *"Hoje Fabinho está no 30PRAUM e nos palcos com WIU e Teto, dividindo o tempo entre a estrada e o estúdio, onde assina produções e arranjos."*

### 3.3 Descrição resumida (hero/about) — a reescrever
> Base atual: *"Fabinho Scooby é tecladista, diretor musical e produtor, com trajetória em turnês, estúdios e produções ao lado de nomes de peso da música brasileira. Do teclado à direção musical, uma carreira construída em cima do palco."*
>
> A nova versão deve citar explicitamente 30PRAUM, WIU, Teto e a atuação como produtor musical.

### 3.4 Formação
- Autodidata — começou de ouvido, observando
- 2001 — Oficina de Piano da UFBA
- 2010 — Extensão no Núcleo Moderno de Música, com o maestro Bira (Ubiratan) Marques
- Graduando em Licenciatura em Música pela UCSal
- Produção musical pela UniCesumar

### 3.5 Trajetória profissional
- Músico profissional desde 1999
- Sideman e freelancer no mercado baiano e nordestino (arrocha a zouk)
- Turnês pelo Brasil, Estados Unidos, Europa e Oceania
- **Jammil e Uma Noites** — tecladista a partir de 2011
  - DVD "Jammil de Todas as Praias" (ao vivo, 2014/2015) — crédito de teclados
  - Compositor em "Resenha Do Dread"
  - Passagens por TV: Domingão do Faustão, Xuxa, BBB, Multishow, Caldeirão do Huck, Ana Maria Braga, Fátima Bernardes, Record, Band, SBT
- Indicado ao **Latin Grammy**
- **30PRAUM** — tecladista (fase atual)
- **WIU** e **Teto** — tecladista nos shows (fase atual)

### 3.6 Projetos e sociedades
- **PLUS+ (Plus Mais)** — sócio proprietário desde outubro de 2011, como produtor e arranjador
- **3h3ads (ThreeHeads) Keys / 333** — sócio/fundador do projeto musical; origem do clipe e do making of exibidos no Portfólio
- **Tecladismo Brasil / #tecladismo** — idealizador e CEO
- **Stay Music** — endorsee

### 3.7 Créditos selecionados

| Artista/Projeto | Trabalho | Função |
|---|---|---|
| Jammil | "Resenha Do Dread" | Composição |
| ATTØØXXA | "Groove" | Arranjo |
| ATTØØXXA / Carlinhos Brown | "Da Favela Pro Asfalto" | Arranjo |
| ATTØØXXA | "Sai da Frente" | Teclado, synth e arranjo |
| *(a confirmar)* | Trabalhos do ciclo atual — 30PRAUM, WIU, Teto e produções assinadas | *(a confirmar)* |

### 3.8 Acervo visual do Portfólio

| Categoria | Conteúdo previsto | Origem |
|---|---|---|
| **Shows** | Fotos ao vivo (palco, festivais, turnê) | Acervo do Fabinho / fotógrafos |
| **333** | Clipe oficial + vídeos de making of | YouTube |
| **Instagram** | Seleção de posts do @fabinhoscooby | Curadoria manual, com link para o post |
| **Estúdio** | Bastidores de gravação, setup de teclados, produção | Acervo do Fabinho |
| **Retratos** | Fotos autorais / material de imprensa | Acervo do Fabinho |

### 3.9 Contato
- **E-mail:** contato@fabinhoscooby.com
- **WhatsApp:** +55 (71) 99164-9370
- **Site:** https://fabinhoscooby.com/
- **Instagram:** https://www.instagram.com/fabinhoscooby
- **LinkedIn:** https://www.linkedin.com/in/fabinho-scooby-vaccarezza-976347146

---

## 4. Modelo de Conteúdo

O conteúdo continua desacoplado do código, em JSON tipado sob `src/content/`, carregado por `src/lib/content.ts` — adicionar uma foto ou um crédito não exige tocar em componente.

### 4.1 Coleções existentes

| Arquivo | Conteúdo | Mudança nesta iteração |
|---|---|---|
| `site.json` | Identidade, bios, destaques, formação, projetos, contato, foto de imprensa, vídeo em destaque | Reescrever bios; adicionar `currentWork` |
| `timeline.json` | Marcos da trajetória | Ordem decrescente + marcos da fase atual |
| `creditos.json` | Créditos por artista/projeto | Ampliar com o ciclo atual |
| `midia.json` | Aparições em TV/mídia | Sem mudança |

### 4.2 Nova estrutura `currentWork` (em `site.json`)

```ts
type CurrentWork = {
  id: string;            // "30praum" | "wiu" | "teto" | "producao"
  name: string;          // "30PRAUM"
  role: string;          // "Tecladista"
  period: string;        // "Atualmente"
  description: string;
  url?: string;
};
```

### 4.3 Nova coleção `portfolio.json`

```ts
type PortfolioCategory = "shows" | "333" | "estudio" | "instagram" | "retratos";

type PortfolioItem = {
  id: string;
  type: "image" | "video";
  category: PortfolioCategory;
  title: string;
  caption?: string;
  /** Obrigatório em imagens: descrição para leitores de tela */
  alt?: string;
  /** Imagens: caminho local em /images/portfolio/ */
  src?: string;
  width?: number;
  height?: number;
  /** Vídeos: id do YouTube, reaproveitando o YouTubeFacade */
  youtubeId?: string;
  /** Instagram: link do post original */
  href?: string;
  /** Crédito do fotógrafo ou diretor */
  credit?: string;
  date?: string;
  featured?: boolean;
};
```

**Regras:** todo item `image` exige `alt` e `src`; todo item `video` exige `youtubeId`; itens de categoria `instagram` devem trazer `href`. A validação pode ser feita com um schema Zod em tempo de build para evitar item quebrado em produção.

---

## 5. Requisitos Não Funcionais

| Categoria | Requisito |
|---|---|
| **Performance** | Core Web Vitals no verde, inclusive na página Portfólio: imagens otimizadas com `next/image`, `sizes` por breakpoint, lazy loading abaixo da dobra, vídeos sempre via facade |
| **Acessibilidade** | WCAG 2.1 AA. Na galeria: `alt` descritivo em toda imagem, lightbox navegável por teclado com `Esc` e *focus trap*, filtros com estado anunciado, respeito a `prefers-reduced-motion` |
| **SEO** | SSR/SSG, meta tags dinâmicas por rota, schema.org (Person + MusicGroup), redirect 308 de `/sobre`, sitemap e robots |
| **Segurança** | Validação de formulário, honeypot e rate limit por IP (já implementados) |
| **Manutenibilidade** | Código tipado e componentizado; adicionar foto, vídeo, crédito ou marco da timeline deve ser edição de JSON |
| **Compatibilidade** | Últimas 2 versões de Chrome, Firefox, Safari, Edge |
| **Responsividade** | Mobile (360px+), tablet (768px+), desktop (1280px+) |
| **Direitos de imagem** | Crédito de fotógrafo/diretor exibível por item; nenhum material de terceiros sem autorização |

---

## 6. Stack Tecnológica (implementada)

| Camada | Tecnologia |
|---|---|
| **Framework** | Next.js 15 (App Router) |
| **Linguagem** | TypeScript |
| **Runtime** | Node.js 20+ |
| **Estilização** | Tailwind CSS 4 |
| **Componentes** | Radix UI + padrão shadcn/ui (biblioteca própria em `components/ui`) |
| **Ícones** | lucide-react |
| **Tipografia** | next/font — Inter + Inter Tight |
| **Animações** | Framer Motion |
| **Conteúdo** | JSON local tipado (CMS headless permanece opcional, fase 2) |
| **Imagens** | next/image com AVIF/WebP |
| **Vídeo** | Embed de YouTube com facade (`youtube-nocookie.com`) |
| **Formulário** | React Hook Form + Zod |
| **E-mail** | Resend via API Route |
| **Anti-spam** | Honeypot + rate limit por IP |
| **Hospedagem** | Vercel · domínio fabinhoscooby.com |
| **Analytics** | Vercel Analytics |
| **Qualidade** | ESLint + Prettier (Vitest/Playwright pendentes) |

---

## 7. Arquitetura de Pastas

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                     # 1. Home
│   ├── bio/page.tsx                 # 2. Bio — Agora, Produção, Timeline, Créditos,
│   │                                #    Quem é, Formação, Projetos, Mídia, Imprensa
│   ├── portfolio/page.tsx           # 3. Portfólio — NOVA (substitui /sobre)
│   ├── contato/page.tsx             # 4. Contato
│   └── api/contact/route.ts
├── components/
│   ├── ui/                          # button, card, input, select, section, reveal, copy-button…
│   ├── layout/                      # navbar (Portfólio no lugar de Sobre), footer, brand, social
│   └── sections/
│       ├── agora.tsx                # NOVO — fase atual: 30PRAUM, WIU, Teto
│       ├── producao-musical.tsx     # NOVO — atuação como produtor
│       ├── portfolio-grid.tsx       # NOVO — grade filtrável
│       ├── portfolio-lightbox.tsx   # NOVO — visualização ampliada acessível
│       ├── portfolio-333.tsx        # NOVO — clipe + making of
│       ├── timeline.tsx             # ordem decrescente
│       ├── creditos-grid.tsx · midia-grid.tsx · press-kit.tsx · projetos-proprios.tsx
│       └── hero.tsx · destaques.tsx · media-embed.tsx · youtube-facade.tsx · cta-contato.tsx
├── content/
│   ├── site.json                    # + currentWork, bios reescritas
│   ├── timeline.json                # ordem decrescente + fase atual
│   ├── creditos.json
│   ├── midia.json
│   └── portfolio.json               # NOVO — acervo visual
├── lib/                             # content, seo, email, validations, rate-limit, utils
├── types/content.ts                 # + CurrentWork, PortfolioItem
public/
└── images/
    └── portfolio/                   # NOVO — fotos otimizadas e versionadas
```

---

## 8. Roadmap

| Fase | Entregas | Status |
|---|---|---|
| **Fases 1–6** | Setup, layout base, Home, Bio, Sobre e Contato | Concluídas |
| **Fase 7 — Bio da fase atual** | Seção "Agora" (30PRAUM, WIU, Teto), seção de produção musical, timeline invertida, bios reescritas | Esta iteração |
| **Fase 8 — Migração Sobre → Bio** | "Quem é", formação, projetos próprios e kit de imprensa passam para a Bio | Esta iteração |
| **Fase 9 — Portfólio** | Rota `/portfolio`, filtros, galeria com lightbox, seção 333, redirect de `/sobre`, navbar/footer renomeados | Esta iteração |
| **Fase 10 — Acervo** | Curadoria, otimização e publicação das fotos e vídeos reais | Depende de material do Fabinho |
| **Fase 11 — SEO técnico** | `sitemap.ts`, `robots.ts`, imagem de Open Graph, LinkedIn | Pendência da v1 |
| **Fase 12 — Qualidade** | Vitest + Playwright, monitoramento de erros | Backlog |

---

## 9. Riscos e Mitigações

| Risco | Mitigação |
|---|---|
| Galeria pesada derrubar a performance da página Portfólio | `next/image` com `sizes` por breakpoint, AVIF/WebP, lazy loading, facade em todo vídeo, "carregar mais" acima de ~24 itens |
| Portfólio publicado sem acervo suficiente ficar "vazio" | Definir um mínimo de itens por categoria antes de publicar; categoria sem conteúdo não é exibida |
| Fotos do Instagram quebrarem por expiração de URL do CDN | Hospedar as imagens localmente em vez de hotlinkar |
| Uso de fotos de terceiros sem crédito ou autorização | Campo `credit` por item e checagem de autorização antes de publicar |
| Perda de tráfego e links quebrados ao aposentar `/sobre` | Redirect permanente 308 + atualização de todos os links internos |
| Bio ficar longa demais ao absorver o conteúdo do Sobre | Hierarquia clara: fase atual e produção no topo; formação, projetos e imprensa em dobras secundárias, com blocos compactos |
| Informação desatualizada sobre com quem Fabinho toca | Fase atual isolada em `currentWork`, fácil de editar sem mexer em componente |
| Baixo reconhecimento de marca pessoal vs. bandas | Assinatura pessoal em destaque; 30PRAUM, WIU e Teto como prova social, não como identidade principal |

---

## 10. Critérios de Aceite (iteração 2)

**Geral**
- [ ] Site com 4 páginas navegáveis: Home, Bio, **Portfólio** e Contato
- [ ] Navbar e footer exibem "Portfólio" no lugar de "Sobre", com destaque de página ativa
- [ ] `/sobre` redireciona permanentemente para `/portfolio`
- [ ] Nenhum link interno apontando para `/sobre`
- [ ] Lighthouse Performance/Acessibilidade/SEO ≥ 90 nas 4 páginas, **inclusive no Portfólio**
- [ ] `npm run lint`, `npm run typecheck` e `npm run build` sem erro

**Bio**
- [ ] A fase atual (30PRAUM, WIU, Teto) aparece **antes** da timeline e é a seção de maior peso visual
- [ ] Existe seção dedicada à atuação como produtor musical, com CTA para contato
- [ ] Timeline em ordem decrescente, do presente para 1999, incluindo os marcos atuais
- [ ] Bio curta, bio longa e descrição do hero citam 30PRAUM, WIU, Teto e produção musical
- [ ] Formação, "quem é", projetos próprios, endorsement e kit de imprensa presentes, sem perda de conteúdo em relação ao antigo Sobre
- [ ] Grid de créditos e grid de mídia/TV preservados e funcionais

**Portfólio**
- [ ] Rota `/portfolio` com metadata, canonical e Open Graph próprios
- [ ] Filtros por categoria funcionando, com estado acessível e sem recarregar a página
- [ ] Seção 333 com o clipe e ao menos um vídeo de making of, todos via facade
- [ ] Galeria de fotos de shows e de Instagram, com link para o post original nos itens do Instagram
- [ ] Lightbox navegável por teclado (setas e `Esc`), com *focus trap* e crédito visível
- [ ] Toda imagem com `alt` descritivo
- [ ] Nenhuma imagem servida por hotlink do CDN do Instagram

**Contato**
- [ ] Formulário segue enviando com sucesso para contato@fabinhoscooby.com
- [ ] Tipo de projeto contempla "Produção musical"

---

## 11. Pendências e Perguntas Abertas

Itens que dependem de definição do Fabinho antes ou durante o desenvolvimento:

| # | Pendência | Impacto |
|---|---|---|
| 1 | **"333" é o 3h3ads (ThreeHeads) Keys?** Se for outro projeto, precisa de nome, descrição e vínculo corretos | Copy e organização da seção de destaque do Portfólio |
| 2 | **Link do clipe do 333 e dos vídeos de making of** (URLs do YouTube) | Sem isso a seção fica em estado "em breve" |
| 3 | **Fotos**: acervo de shows, estúdio e seleção de posts do Instagram, em alta resolução | Bloqueia a Fase 10; sem material a galeria não é publicável |
| 4 | **Créditos de fotógrafos** das imagens de show | Exibição do campo `credit` |
| 5 | **Desde quando** atua com 30PRAUM, WIU e Teto | Precisão da timeline e dos cards da seção "Agora" |
| 6 | **Função exata** em cada frente atual (tecladista, direção musical, produção?) | Copy dos cards da seção "Agora" |
| 7 | **Créditos de produção** do ciclo atual que podem ser divulgados | Ampliação do grid de créditos |
| 8 | **Manter o Jammil e Uma Noites** como vínculo atual ou tratar como histórico? | Hierarquia entre "Agora" e timeline |
| 9 | **Perfil do LinkedIn** e demais redes a incluir (YouTube? Spotify como artista?) | Links sociais e `sameAs` do schema.org |

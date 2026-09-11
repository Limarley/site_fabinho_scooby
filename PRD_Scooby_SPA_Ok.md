# PRD — Site Scooby (SPA Minimalista, 4 Seções)

## 1. Contexto e Motivação

Durante a análise do site do Kyan (portfólio em Figma), identificamos um formato de SPA (Single Page Application) enxuto, com apenas 4 blocos de conteúdo, hierarquia visual forte por seção (mudança de cor de fundo marcando cada bloco) e navegação por scroll simples. Essa experiência foi validada como referência de UX/UI a ser replicada — **não copiando o visual**, mas **copiando a lógica estrutural**: poucas seções, cada uma com uma função clara, sem excesso de cliques ou submenus.

O objetivo deste documento é adaptar esse formato para o projeto **Scooby**, mantendo o layout visual que você já está usando (identidade verde/vermelho, #TECLADISMO, estética urbana/mascote), mas testando a arquitetura de 4 seções do Kyan.

**Atualização importante de escopo**: o "Scooby" não é apenas um personagem/mascote de ensino — é a identidade visual/artística de **Fabinho Scooby**, tecladista, diretor musical, arranjador, produtor, beatmaker e educador musical baiano, com carreira profissional desde 1999. Isso muda o peso do site: além de vender o movimento #Tecladismo (educação), o site também precisa comunicar **credibilidade e bagagem profissional real** (Jammil e Uma Noites, 30PRAUM, Matuê, WIU, Teto, Rock in Rio Lisboa) e o projeto autoral **PreethovenBeatZ**. O mascote verde/vermelho segue como camada visual de marca (usado em redes e conteúdo educacional), mas o site precisa acomodar também essa camada de "artista profissional" sem virar dois sites desconexos.

## 2. Objetivo do Produto

Criar uma landing page única (SPA) para o Scooby que:
- Apresente a identidade de Fabinho Scooby de forma imediata (hero de impacto, com peso de artista profissional).
- Conte quem ele é, sua trajetória e seu propósito com o #Tecladismo (educação musical).
- Comunique credibilidade: carreira, parcerias artísticas (Jammil, 30PRAUM/Matuê) e apoio de marcas (Casio, Roland, etc.).
- Exiba a oferta principal (aulas do #Tecladismo, conteúdo, produtos/merch).
- Direcione o visitante para uma ação clara (contato, inscrição, redes sociais, loja).

## 3. Referência de Estrutura (baseada no site do Kyan)

| # | Seção no Kyan | Função | Adaptação para o Scooby |
|---|---|---|---|
| 1 | Hero (nome gigante + foto + player) | Impacto visual imediato, identidade | Hero com o Scooby (mascote verde/vermelho) + tagline + elemento de destaque (ex: vídeo curto ou áudio de aula) |
| 2 | "Quem é Kyan?" (bio, fundo vermelho sólido) | Apresentação/storytelling | "Quem é o Scooby?" — bio real e resumida de Fabinho Scooby (trajetória, Jammil, 30PRAUM/Matuê, #Tecladismo), frase-símbolo ("A Bahia é o Mundo!") |
| 3 | Merch (colagem de produtos + grid de camisetas) | Oferta comercial | Seção de **Aulas/Produtos + Carreira**: módulos do #Tecladismo, projeto autoral PreethovenBeatZ, credenciais (turnês, festivais, DVD indicado ao Grammy Latino) e merch físico |
| 4 | Footer/CTA implícito (redes, contato) | Conversão | Bloco final de contato: redes sociais, WhatsApp, link de inscrição/lista de espera |

## 4. Escopo do MVP (Fase de Teste)

### 4.1 Seção 1 — Hero
- Fundo escuro (preto), personagem Scooby em destaque (versão de alto impacto, ex: a imagem rindo com boné #TECLADISMO ou a versão "workspace" com teclado/MPC).
- Nome/marca em tipografia grande, similar ao "KYAN" no site de referência. Sugestão: "FABINHO SCOOBY" como wordmark principal, com "#TECLADISMO" como selo/tag secundário — não o contrário — já que o nome próprio carrega a credibilidade profissional.
- Subtítulo com os papéis profissionais em linha única: *Tecladista • Diretor Musical • Arranjador • Produtor • Beatmaker • Educador Musical*.
- Um elemento de prova social ou mídia (mini player, contador de alunos, selo "#TECLADISMO", ou um destaque tipo "Tecladista de Matuê, WIU e Teto — 30PRAUM").
- CTA primário visível (ex: "Conhecer o #Tecladismo" ou "Ver aulas").

### 4.2 Seção 2 — Quem é o Scooby (bio real)
- Fundo de cor sólida contrastante (testar verde ou preto, já que vermelho é a cor de destaque da barba/identidade).
- Texto-base (resumido da bio oficial, ajustável ao espaço da seção):
  > *"Músico, produtor e diretor musical baiano, atuando desde 1999. Sua formação reúne MPB, rock, jazz, música instrumental, ritmos afro-baianos e erudita. Foi tecladista da Jammil e Uma Noites (2011–2021), com DVD indicado ao Grammy Latino e turnês por Brasil, Europa, EUA, África e Oceania. Desde 2022 integra a 30PRAUM como tecladista de Matuê, WIU e Teto, com passagens pelo The Town e Rock in Rio Lisboa 2026, além de co-produção e arranjos do álbum 333, de Matuê. É idealizador do #Tecladismo, movimento de valorização dos tecladistas brasileiros, e assina o projeto autoral PreethovenBeatZ."*
- Essa versão é longa para uma seção minimalista — **decisão de produto**: exibir uma versão curta (3–4 linhas com os pontos de maior impacto: Jammil, 30PRAUM/Matuê, #Tecladismo) e oferecer um link/expansor discreto ("ver trajetória completa") para quem quiser a bio inteira, mantendo a seção limpa.
- Foto de apoio (ex: pose pensativa/mãos com tatuagem de girassol, que já aparece no material atual).

### 4.3 Seção 3 — Aulas / Produtos / Carreira (equivalente ao Merch)
- Grid ou colagem com as ofertas do #Tecladismo: teclas, harmonia, groove, produção, criatividade (conforme já está no quadro branco "Aula:" do material atual).
- Bloco de credenciais/carreira (curto, tipo "ficha técnica"): Jammil e Uma Noites, 30PRAUM (Matuê/WIU/Teto), álbum 333, The Town, Rock in Rio Lisboa 2026 — reforça autoridade antes de vender o curso.
- Projeto autoral **PreethovenBeatZ** pode entrar aqui como um card à parte (produção musical/beats), já que é uma frente distinta da educação.
- Cards de produto com nome, preço (se aplicável) e imagem — seguindo o padrão de cards do Kyan, mas evitando o problema identificado lá (placeholders não substituídos, falta de variação visual entre itens).
- Se houver merch físico (boné, mochila, camiseta #TECLADISMO), incluir aqui também.

### 4.4 Seção 4 — Contato / Redes / Parceiros / CTA final
- Ícones/links de redes sociais.
- CTA final: inscrição, WhatsApp, ou link de compra.
- **Faixa de marcas parceiras** (nova, com base nos dados reais): Stay Music, IBOX Musical, Saty Suportes, Casio Teclados, Tokai Brasil, Roland, Mac Cabos, Blue Ears, Kuba Audio — exibidas como logotipos em escala de cinza, discretos, na parte inferior da seção (reforça credibilidade sem competir com o CTA principal).
- Rodapé minimalista (sem menu extenso, mantendo a filosofia enxuta do formato).

## 5. Diretrizes Visuais

- **Paleta principal**: preto (fundo/hoodie), verde (pele do personagem), vermelho/laranja (barba, dreads, detalhes), amarelo (botas Timberland) como cor de destaque pontual.
- **Tipografia**: peso forte para nome/hero (como "KYAN" em caixa alta), texto de apoio limpo e legível sobre fundos sólidos.
- **Fotografia/arte**: usar as artes já produzidas do Scooby (mascote 3D estilizado) como elemento central de cada seção, evitando poluição visual.
- **Movimento**: se possível, uma transição suave de scroll entre seções (fade ou slide), como sugere a sensação de "vídeo/apresentação" percebida no site do Kyan.

## 6. Requisitos Técnicos

- Estrutura: SPA (single page, scroll vertical, sem rotas múltiplas).
- Responsivo (mobile-first, já que a referência foi vista via Instagram Stories/celular).
- Performance: imagens otimizadas (o personagem tem fundos complexos/transparência — usar PNG otimizado ou WebP).
- Se houver loja (produtos), integração simples de checkout ou redirecionamento para plataforma externa (ex: link de pagamento).

## 7. Fora de Escopo (nesta fase de teste)

- Blog ou área de conteúdo extensa.
- Sistema de login/área de membros.
- Múltiplas páginas internas (manter tudo em uma SPA).

## 8. Riscos / Pontos de Atenção (aprendidos com a análise do site do Kyan)

- Evitar placeholders esquecidos (ex: "Camisa Name Aqui") — todo conteúdo de produto deve estar final antes de publicar.
- Cuidado com contraste de texto sobre fundos coloridos saturados (testar legibilidade da bio).
- Manter consistência de estilo entre seções (evitar mistura de grid rígido com colagem angulada sem propósito).
- **Risco novo — excesso de informação em 4 seções**: a bio real de Fabinho Scooby é densa (carreira de 25+ anos, múltiplos papéis, múltiplos projetos). Forçar tudo isso em 4 blocos minimalistas pode gerar poluição. Mitigação: priorizar 3–4 credenciais de maior peso (Jammil, 30PRAUM/Matuê, #Tecladismo, PreethovenBeatZ) e deixar o restante para uma página "Sobre" expandida ou PDF de press-kit, fora da SPA principal.
- **Risco de identidade dupla**: existe uma tensão entre "Fabinho Scooby, artista profissional" (currículo, marcas, festivais) e "Scooby, mascote educador" (arte 3D verde/vermelho, tom mais leve/pop). O site precisa decidir qual camada lidera cada seção — sugestão: hero e bio lideram com o artista real (credibilidade), enquanto a seção de aulas pode usar o mascote/arte estilizada (identidade do #Tecladismo nas redes).

## 9-A. Conteúdo de Referência (dados brutos para copywriting)

**Nome/títulos**: Fabinho Scooby — Tecladista • Diretor Musical • Arranjador • Produtor • Beatmaker • Educador Musical.

**Bio oficial (para uso em "ver trajetória completa" ou press-kit)**:
> Fabinho Scooby é músico, produtor musical e diretor musical baiano, atuando profissionalmente desde 1999. Sua formação foi construída a partir da diversidade cultural de Salvador, reunindo influências da música popular brasileira, rock, jazz, música instrumental, ritmos afro-baianos e música erudita. Reconhecido pela versatilidade nos palcos e estúdios, desenvolveu uma carreira sólida como sideman, produtor, arranjador e diretor musical, participando de gravações, programas de TV, festivais, espetáculos e turnês nacionais e internacionais. Entre 2011 e 2021, foi integrante da banda Jammil e Uma Noites, participando de importantes projetos audiovisuais, incluindo o DVD Na Real, indicado ao Grammy Latino, Jammil de Todas as Praias, além de apresentações nas principais emissoras de TV do país e turnês pelo Brasil, Europa, Estados Unidos, África e Oceania. Desde 2022, integra a equipe da 30PRAUM, atuando como tecladista de Matuê, WIU e Teto, participando de grandes festivais e turnês nacionais e internacionais, incluindo duas edições do The Town e o Rock in Rio Lisboa 2026. Também foi co-produtor e arranjador do álbum 333, de Matuê, um dos maiores lançamentos da música brasileira recente. Além da carreira artística, é idealizador do movimento #Tecladismo, iniciativa dedicada ao fortalecimento, valorização e profissionalização dos tecladistas brasileiros, promovendo educação, troca de conhecimento e desenvolvimento artístico. Como produtor, assina o projeto "• PreethovenBeatZ •", que une música brasileira, elementos afro-diaspóricos, música eletrônica e instrumentos de teclado em uma identidade sonora contemporânea.

**Marcas parceiras (para a faixa de apoio no rodapé)**: Stay Music, IBOX Musical, Saty Suportes, Casio Teclados, Tokai Brasil, Roland, Mac Cabos, Blue Ears, Kuba Audio.

## 9. Critérios de Sucesso do Teste

- Tempo de permanência na página (indicador de que o formato enxuto prende atenção).
- Taxa de clique no CTA final (contato/inscrição/compra).
- Feedback qualitativo: visitantes entendem "quem é o Scooby" e "o que ele oferece" só rolando a página, sem precisar de menu.

## 10. Próximos Passos

1. Validar este PRD e ajustar prioridades de seção.
2. Selecionar as artes finais do Scooby para cada seção (hero, bio, produtos).
3. Montar wireframe de baixa fidelidade das 4 seções.
4. Prototipar no Figma seguindo o layout já em uso.
5. Testar com público reduzido antes de publicar.

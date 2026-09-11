# PRD — Site Scooby (SPA Minimalista, 4 Seções)

## 1. Contexto e Motivação

Durante a análise do site do Kyan (portfólio em Figma), identificamos um formato de SPA (Single Page Application) enxuto, com apenas 4 blocos de conteúdo, hierarquia visual forte por seção (mudança de cor de fundo marcando cada bloco) e navegação por scroll simples. Essa experiência foi validada como referência de UX/UI a ser replicada — **não copiando o visual**, mas **copiando a lógica estrutural**: poucas seções, cada uma com uma função clara, sem excesso de cliques ou submenus.

O objetivo deste documento é adaptar esse formato para o projeto **Scooby**, mantendo o layout visual que você já está usando (identidade verde/vermelho, #TECLADISMO, estética urbana/mascote), mas testando a arquitetura de 4 seções do Kyan.

## 2. Objetivo do Produto

Criar uma landing page única (SPA) para o Scooby que:
- Apresente a identidade do personagem/marca de forma imediata (hero de impacto).
- Conte quem é o Scooby e seu propósito (ensino de teclado/produção musical — #TECLADISMO).
- Exiba a oferta principal (aulas, conteúdo, produtos/merch).
- Direcione o visitante para uma ação clara (contato, inscrição, redes sociais, loja).

## 3. Referência de Estrutura (baseada no site do Kyan)

| # | Seção no Kyan | Função | Adaptação para o Scooby |
|---|---|---|---|
| 1 | Hero (nome gigante + foto + player) | Impacto visual imediato, identidade | Hero com o Scooby (mascote verde/vermelho) + tagline + elemento de destaque (ex: vídeo curto ou áudio de aula) |
| 2 | "Quem é Kyan?" (bio, fundo vermelho sólido) | Apresentação/storytelling | "Quem é o Scooby?" — bio curta, propósito do #TECLADISMO, frase-símbolo ("A Bahia é o Mundo!") |
| 3 | Merch (colagem de produtos + grid de camisetas) | Oferta comercial | Seção de **Aulas/Produtos**: cursos, e-books, mentorias, ou merch físico (bonés, camisetas #TECLADISMO) |
| 4 | Footer/CTA implícito (redes, contato) | Conversão | Bloco final de contato: redes sociais, WhatsApp, link de inscrição/lista de espera |

## 4. Escopo do MVP (Fase de Teste)

### 4.1 Seção 1 — Hero
- Fundo escuro (preto), personagem Scooby em destaque (versão de alto impacto, ex: a imagem rindo com boné #TECLADISMO ou a versão "workspace" com teclado/MPC).
- Nome/marca em tipografia grande, similar ao "KYAN" no site de referência.
- Um elemento de prova social ou mídia (mini player, contador de alunos, ou selo "#TECLADISMO").
- CTA primário visível (ex: "Começar agora" ou "Ver aulas").

### 4.2 Seção 2 — Quem é o Scooby
- Fundo de cor sólida contrastante (testar verde ou preto, já que vermelho é a cor de destaque da barba/identidade).
- Texto curto (3–5 linhas) contando a origem/missão do personagem, tom pessoal (como o "Quem é Kyan?").
- Foto de apoio (ex: pose pensativa/mãos com tatuagem de girassol, que já aparece no material atual).

### 4.3 Seção 3 — Aulas / Produtos (equivalente ao Merch)
- Grid ou colagem com as ofertas: aulas de teclado, harmonia, groove, produção (conforme já está no quadro branco "Aula:" do material de referência).
- Cards de produto com nome, preço (se aplicável) e imagem — seguindo o padrão de cards do Kyan, mas evitando o problema identificado lá (placeholders não substituídos, falta de variação visual entre itens).
- Se houver merch físico (boné, mochila, camiseta #TECLADISMO), incluir aqui também.

### 4.4 Seção 4 — Contato / Redes / CTA final
- Ícones/links de redes sociais.
- CTA final: inscrição, WhatsApp, ou link de compra.
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

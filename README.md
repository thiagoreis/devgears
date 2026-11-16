# DevGears

Blog sobre desenvolvimento de software, por Thiago Reis. Construído com [Astro](https://astro.build/) a partir do tema [AstroPaper](https://github.com/satnaing/astro-paper) v7.2.0.

## Requisitos

- Node.js 22.23.4 ou superior
- pnpm

## Comandos

| Comando        | O que faz                                                  |
| :------------- | :--------------------------------------------------------- |
| `pnpm install` | Instala as dependências                                    |
| `pnpm dev`     | Sobe o servidor local em `localhost:4321`                  |
| `pnpm build`   | Verifica tipos, gera o site em `dist/` e o índice da busca |
| `pnpm preview` | Serve o build localmente                                   |
| `pnpm lint`    | Roda o ESLint                                              |
| `pnpm format`  | Formata o código com o Prettier                            |

## Onde mexer

| O quê                             | Arquivo                      |
| :-------------------------------- | :--------------------------- |
| Título, URL, autor, redes sociais | `astro-paper.config.ts`      |
| Texto da página inicial           | `src/pages/index.astro`      |
| Página "Sobre"                    | `src/content/pages/about.md` |
| Textos da interface em português  | `src/i18n/lang/pt-BR.ts`     |
| Posts                             | `src/content/posts/`         |

## Escrevendo um post pelo painel

O repositório está configurado para o [Pages CMS](https://app.pagescms.org). Entre com a conta do GitHub, escolha este repositório e use "Posts" para criar ou editar. Cada vez que você salva, o painel faz um commit e a Vercel publica.

- Marque "Rascunho" para salvar sem publicar.
- As imagens enviadas pelo painel ficam em `public/images/posts/`.
- Os campos do painel são definidos em `.pages.yml`.

## Escrevendo um post pelo editor de código

Copie `src/content/posts/modelo-de-post.md`, ajuste o frontmatter e remova `draft: true`. Posts com `draft: true` não entram no build.

## Licença

O código do tema é distribuído sob a licença MIT (veja `LICENSE`). O conteúdo dos posts pertence ao autor.

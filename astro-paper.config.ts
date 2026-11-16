import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    // Troque para o domínio definitivo (ex.: https://devgears.com.br/) quando
    // ele estiver apontado para o projeto.
    url: "https://devgears.vercel.app/",
    title: "DevGears",
    description:
      "Conceitos de desenvolvimento de software explicados em português: .NET, React, Linux e AI Engineering.",
    author: "Thiago Reis",
    profile: "https://github.com/thiagoreis",
    // Sem arquivo em public/, o tema gera a imagem de compartilhamento (/og.png).
    ogImage: "default-og.jpg",
    lang: "pt-BR",
    timezone: "America/Sao_Paulo",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 6,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/thiagoreis/devgears/edit/master/",
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    {
      name: "github",
      url: "https://github.com/thiagoreis",
      linkTitle: "Thiago Reis no GitHub",
    },
    {
      name: "x",
      url: "https://x.com/thiagoreisdev",
      linkTitle: "Thiago Reis no X",
    },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "linkedin", url: "https://www.linkedin.com/sharing/share-offsite/?url=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail",     url: "mailto:?subject=Veja%20este%20post&body=" },
  ],
});

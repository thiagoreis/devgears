import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Início",
    posts: "Posts",
    tags: "Tags",
    about: "Sobre",
    archives: "Arquivo",
    search: "Busca",
  },
  post: {
    publishedAt: "Publicado em",
    updatedAt: "Atualizado",
    sharePostIntro: "Compartilhe este post:",
    sharePostOn: "Compartilhar este post no {{platform}}",
    sharePostViaEmail: "Compartilhar este post por e-mail",
    tagLabel: "Tags",
    backToTop: "Voltar ao topo",
    tableOfContents: "Neste post",
    goBack: "Voltar",
    editPage: "Editar página",
    previousPost: "Post anterior",
    nextPost: "Próximo post",
  },
  pagination: {
    prev: "Anterior",
    next: "Próxima",
    page: "Página",
  },
  home: {
    socialLinks: "Redes",
    featured: "Destaques",
    recentPosts: "Posts recentes",
    allPosts: "Todos os posts",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Todos os direitos reservados.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "Todos os posts com a tag",

    tagsTitle: "Tags",
    tagsDesc: "Todas as tags usadas nos posts.",

    postsTitle: "Posts",
    postsDesc: "Todos os posts publicados.",

    archivesTitle: "Arquivo",
    archivesDesc: "Todos os posts, organizados por data.",

    searchTitle: "Busca",
    searchDesc: "Busque por qualquer post...",
  },
  a11y: {
    skipToContent: "Pular para o conteúdo",
    skipTableOfContents: "Pular o sumário",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    toggleTheme: "Alternar tema",
    searchPlaceholder: "Buscar posts...",
    noResults: "Nenhum resultado encontrado",
    goToPreviousPage: "Ir para a página anterior",
    goToNextPage: "Ir para a próxima página",
  },
  notFound: {
    title: "404",
    message: "Página não encontrada",
    goHome: "Voltar ao início",
  },
} satisfies UIStrings;

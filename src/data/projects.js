// GitHub username - altere aqui se necessário
const GITHUB_USERNAME = "ArthurDias96";

// Função helper para gerar link do GitHub automaticamente
export const getGithubUrl = (repo) => {
  if (!repo) return null;
  // Se já for uma URL completa, retorna como está
  if (repo.startsWith("http")) return repo;
  // Se for só o nome do repo, monta a URL completa
  return `https://github.com/${GITHUB_USERNAME}/${repo}`;
};

export const projects = [
  {
    title: "Fischer Construções — Projeto histórico",
    stack: "HTML · CSS · JavaScript · PHP",
    description:
      "Meu primeiro projeto oficial em produção: site institucional para a Fischer Construções. Hoje está no ar como registro histórico do início da minha jornada como dev.",
    githubRepo: "fischerconstrucoes",
    link: "https://fischerconstrucoes.vercel.app",
    isPrivateCode: false,
  },
  {
    title: "Star Wars API — Desafio",
    stack: "React · React Router · CSS",
    description:
      "Aplicação que consome a Star Wars API e mostra, para cada rota, informações randômicas de filmes, personagens, planetas e naves, com navegação entre categorias.",
    githubRepo: "starwars-api-project",
    link: null, // Ainda sem deploy
    isPrivateCode: false,
  },
  {
    title: "Loja E-commerce — Desafio Maeztra",
    stack: "HTML · CSS · JavaScript",
    description:
      "Layout de e-commerce desenvolvido para processo seletivo da Maeztra, com foco em vitrine de produtos, banners promocionais e componentes de interface reutilizáveis.",
    githubRepo: "desafio-maeztra",
    link: "https://layout-maeztra-rose.vercel.app",
    isPrivateCode: false,
  },
  {
    title: "Sistema de Cadastro — Técnico",
    stack: "Pascal · Delphi · Banco de dados",
    description:
      "Sistema de cadastro desenvolvido no curso técnico de informática (2015–2017). Projeto acadêmico que marcou meus primeiros contatos com lógica de programação, formulários, relatórios e integração com banco de dados.",
    githubRepo: "Sistema-de-Cadastro",
    link: null,
    isPrivateCode: false,
  },
  {
    title: "Meu Portfólio",
    stack: "React · Vite · Sass",
    description:
      "Site pessoal com seções de skills, experiência e projetos, com animações suaves e layout responsivo.",
    githubRepo: "portfolio-arthurdias",
    link: "https://arthurdias.vercel.app",
    isPrivateCode: false,
  },
  {
    title: "App Interno (Privado)",
    stack: "React · Node · PostgreSQL",
    description: "Projeto interno com acesso restrito. Código sob NDA.",
    githubRepo: null,
    link: "#",
    isPrivateCode: true,
  },
];

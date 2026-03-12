// GitHub username - altere aqui se necessário
const GITHUB_USERNAME = "arthurdias";

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
    title: "Meu Portfólio",
    stack: "React · Vite · Sass",
    description: "Site pessoal com seção de projetos, animações e responsividade.",
    githubRepo: "portfolio-arthurdias", // Só o nome do repo!
    link: "https://arthurdias.dev",
    isPrivateCode: false,
  },
  {
    title: "App Interno (Privado)",
    stack: "React · Node · PostgreSQL",
    description: "Projeto interno com acesso restrito. Código sob NDA.",
    githubRepo: null, // null = sem GitHub
    link: "#",
    isPrivateCode: true,
  },
];

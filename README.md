# Portfólio — Arthur Dias

Portfólio moderno em React + Vite com Sass, Framer Motion e React Icons.

## Tecnologias
- React (Vite)
- Sass (SCSS) com variáveis e layout responsivo
- Framer Motion (animações suaves)
- React Icons

## Rodando localmente
```bash
# Instalar dependências
npm install

# Ambiente de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview local do build
npm run preview
```

## Deploy na Vercel
1. Faça login em `vercel.com` e importe este repositório.
2. Projeto Vite é detectado automaticamente.
   - Build Command: `vite build` (ou `npm run build`)
   - Output Directory: `dist`
3. Deploy.

Dica: após o primeiro deploy, ative um domínio customizado em Settings → Domains.

## Estrutura principal
```
src/
  components/   # Hero, Header, About, Skills, Projects, Contact
  data/         # projects.js (lista de projetos)
  styles/       # _variables.scss, globals.scss
  App.jsx       # montagem das seções
```

## Editando conteúdo
- Projetos: edite `src/data/projects.js`.
  - Para projetos com código privado, defina `github: null` e `isPrivateCode: true`.
  - O botão “Código” some e aparece o badge “Código restrito (NDA)”.
- Links e redes: atualize os hrefs em `src/components/Contact.jsx`.
- Título/SEO: em `index.html` ajuste `<title>`, `meta description`, Open Graph/Twitter e `og:url`.
- Cores e estilo: `src/styles/_variables.scss` (preto, azul Grêmio `#1d72b8` / `#00AEEF`, vermelho `#e50914`).
- Fonte: Google Fonts (Poppins/Inter) já configurado em `index.html`.

## Acessibilidade
- Smooth scroll habilitado.
- Estados `:focus-visible` para navegação por teclado.
- `aria-label` contextual em botões/links.

## Notas
- Requer Node 18+.
- Se usar ícones adicionais, importe-os de forma seletiva para evitar bundles grandes.
- Para Analytics/Pixel, adicione scripts em `index.html` (no `<head>`), seguindo políticas de privacidade.

## Licença
Uso pessoal do autor. Projetos marcados como privados podem estar sob NDA.

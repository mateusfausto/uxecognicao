# Princípios Cognitivos Aplicados ao UX Design

Landing page com 12 princípios cognitivos aplicados ao design de interfaces.
Construída com **Next.js 14 + Tailwind CSS + Framer Motion**, pronta para o **GitHub Pages**.

---

## 🚀 Deploy no GitHub Pages

### 1. Crie um repositório no GitHub

```bash
git init
git add .
git commit -m "feat: initial landing page"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git
git push -u origin main
```

### 2. Se o site ficar em `username.github.io/nome-do-repo`

Edite `next.config.js` e descomente o `basePath`:

```js
const nextConfig = {
  output: 'export',
  basePath: '/nome-do-repo',   // ← coloque o nome exato do repositório
  images: { unoptimized: true },
  trailingSlash: true,
};
```

> Se for hospedar em `username.github.io` (repo chamado `username.github.io`),
> **não** precisa de `basePath`.

### 3. Ative o GitHub Pages

1. Vá em **Settings → Pages** no seu repositório
2. Em **Source**, escolha **GitHub Actions**
3. Faça um `push` e aguarde o workflow rodar (aba **Actions**)
4. Acesse `https://SEU-USUARIO.github.io/NOME-DO-REPO`

---

## 💻 Desenvolvimento local

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev
# → http://localhost:3000

# Build de produção
npm run build
# Gera a pasta /out com os arquivos estáticos
```

---

## 🗂 Estrutura do projeto

```
├── public/
│   └── images/           # Imagens das seções (slide2-13.jpg)
├── src/
│   ├── app/
│   │   ├── data.ts       # Conteúdo de todos os 12 princípios
│   │   ├── globals.css   # Estilos globais + variáveis CSS
│   │   ├── layout.tsx    # Root layout + metadados
│   │   └── page.tsx      # Página principal (monta as seções)
│   └── components/
│       ├── Navbar.tsx          # Barra de navegação fixa + progress bar
│       ├── Hero.tsx            # Seção hero com animação de rede neural
│       ├── PrinciplesGrid.tsx  # Grid de visão geral dos 12 princípios
│       ├── PrincipleSection.tsx# Seção individual de cada princípio
│       ├── SideNav.tsx         # Dots de navegação lateral (desktop)
│       └── Footer.tsx          # Rodapé
├── .github/
│   └── workflows/
│       └── deploy.yml    # CI/CD automático para GitHub Pages
├── next.config.js        # Static export + configuração GitHub Pages
├── tailwind.config.js
└── tsconfig.json
```

---

## ✏️ Customização

### Adicionar ou editar princípios

Edite o arquivo `src/app/data.ts`. Cada princípio tem:

```ts
{
  id: 1,
  slug: 'meu-principio',       // ancora da URL (#meu-principio)
  headline: 'Título\nLinha 2', // \n quebra linha no heading
  tag: 'Categoria',
  image: '/images/slide2.jpg',
  color: 'accent',             // 'accent' = laranja | 'blue' = azul
  bullets: [
    { title: 'Subtítulo', desc: 'Descrição do conceito.' },
  ],
}
```

### Trocar imagens

Coloque novos arquivos em `public/images/` e atualize o campo `image` em `data.ts`.

---

## 🛠 Stack

| Tecnologia | Uso |
|-----------|-----|
| Next.js 14 | Framework React com static export |
| Tailwind CSS | Utilitários de estilo |
| TypeScript | Tipagem |
| Google Fonts | Bebas Neue (display) + Inter (body) |
| CSS Animations | Reveal on scroll, neural canvas |

# Princípios Cognitivos Aplicados ao UX Design

Landing page com 12 princípios cognitivos aplicados ao design de interfaces.
Construída com **Next.js 13.5 + Tailwind CSS + Framer Motion**, pronta para o **GitHub Pages**.

---

## 🚀 Deploy no GitHub Pages

### Como funciona

O deploy é **automático**. Você trabalha normalmente na branch `master` e faz push nela. O GitHub Actions:

1. Detecta o push na `master`
2. Faz o build do Next.js
3. Publica os arquivos estáticos na branch `gh-pages` automaticamente

**Você NÃO precisa mudar de branch.** Apenas faça:

```bash
git add .
git commit -m "sua mensagem"
git push origin master
```

O workflow cuida do resto. A branch `gh-pages` é gerenciada automaticamente.

### Configuração inicial no GitHub (uma vez só)

1. Vá em **Settings → Pages** no repositório
2. Em **Source**, escolha **Deploy from a branch**
3. Selecione a branch **`gh-pages`** e pasta **`/ (root)`**
4. Clique **Save**
5. Acesse `https://mateusfausto.github.io/uxecognicao/`

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
| Next.js 13.5 | Framework React com static export |
| Tailwind CSS | Utilitários de estilo |
| TypeScript | Tipagem |
| Google Fonts | Bebas Neue (display) + Inter (body) |
| CSS Animations | Reveal on scroll, neural canvas |

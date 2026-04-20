export interface Bullet {
  title: string;
  desc: string;
}

export interface Principle {
  id: number;
  slug: string;
  headline: string;
  subheadline?: string;
  tag: string;
  image: string;
  imageAlt: string;
  color: 'accent' | 'blue';
  bullets: Bullet[];
}

export const principles: Principle[] = [
  {
    id: 1,
    slug: 'percebemos-o-que-esperamos',
    headline: 'Percebemos o que\nEsperamos',
    tag: 'Percepção',
    image: '/images/slide2.jpg',
    imageAlt: 'Expectativas e percepção',
    color: 'accent',
    bullets: [
      {
        title: 'Influência das expectativas',
        desc: 'Os usuários interpretam interfaces com base em experiências e expectativas passadas, afetando a precisão da percepção.',
      },
      {
        title: 'Consistência visual',
        desc: 'O design visual consistente alinha interfaces às expectativas do usuário, melhorando diretamente a usabilidade.',
      },
      {
        title: 'O papel do contexto',
        desc: 'O contexto de apresentação influencia como os usuários interpretam informações e elementos da interface.',
      },
      {
        title: 'Projetando para metas',
        desc: 'Antecipar os objetivos do usuário ajuda a criar navegação intuitiva e interfaces mais claras e eficientes.',
      },
    ],
  },
  {
    id: 2,
    slug: 'visao-otimizada-para-estrutura',
    headline: 'Nossa Visão é Otimizada\npara Perceber Estrutura',
    tag: 'Gestalt',
    image: '/images/slide3.jpg',
    imageAlt: 'Percepção de estrutura e padrões',
    color: 'blue',
    bullets: [
      {
        title: 'Reconhecimento de padrões',
        desc: 'A visão humana identifica naturalmente padrões e agrupa elementos semelhantes ou próximos para perceber estrutura com clareza.',
      },
      {
        title: 'Princípios da Gestalt',
        desc: 'Proximidade, semelhança, continuidade e fechamento orientam a organização visual eficaz no design de interfaces.',
      },
      {
        title: 'Hierarquia visual',
        desc: 'A hierarquia visual ajuda os usuários a identificar rapidamente as informações mais importantes, melhorando a legibilidade.',
      },
    ],
  },
  {
    id: 3,
    slug: 'buscamos-e-usamos-estruturas',
    headline: 'Buscamos e\nUsamos Estruturas',
    tag: 'Organização',
    image: '/images/slide4.jpg',
    imageAlt: 'Uso de estruturas visuais',
    color: 'accent',
    bullets: [
      {
        title: 'Estruturas visuais bem definidas',
        desc: 'Listas, tabelas e agrupamentos organizam as informações e facilitam significativamente a navegação do usuário.',
      },
      {
        title: 'Reduzindo carga cognitiva',
        desc: 'Estruturas claras evitam confusão e reduzem o esforço cognitivo exigido durante a interação com interfaces.',
      },
      {
        title: 'Hierarquia e acessibilidade',
        desc: 'O uso correto de hierarquia visual e agrupamento melhora a experiência e dá suporte à acessibilidade para diversas habilidades.',
      },
    ],
  },
  {
    id: 4,
    slug: 'ler-nao-e-natural',
    headline: 'Ler Não\nÉ Natural',
    tag: 'Leiturabilidade',
    image: '/images/slide5.jpg',
    imageAlt: 'Leitura e design de texto',
    color: 'blue',
    bullets: [
      {
        title: 'Leitura como habilidade aprendida',
        desc: 'A leitura é uma habilidade adquirida, influenciada pela estrutura, contexto e familiaridade com o conteúdo apresentado.',
      },
      {
        title: 'Impacto do design',
        desc: 'Texto excessivo, fontes inadequadas e baixo contraste dificultam a leitura e degradam a experiência do usuário.',
      },
      {
        title: 'Design para legibilidade',
        desc: 'Fontes legíveis, espaçamento adequado e organização clara do conteúdo, evitando texto centralizado, são essenciais.',
      },
      {
        title: 'Recursos visuais complementares',
        desc: 'Imagens e ícones complementam o texto e melhoram a acessibilidade das informações em contextos digitais.',
      },
    ],
  },
  {
    id: 5,
    slug: 'percepcao-de-cores-limitada',
    headline: 'Nossa Percepção de\nCores é Limitada',
    tag: 'Acessibilidade',
    image: '/images/slide6.jpg',
    imageAlt: 'Percepção visual de cores',
    color: 'accent',
    bullets: [
      {
        title: 'Variação individual da percepção',
        desc: 'A percepção das cores varia entre pessoas e pode ser afetada por condições como o daltonismo.',
      },
      {
        title: 'Sensibilidade ao contraste',
        desc: 'Os olhos humanos são mais sensíveis ao contraste do que ao brilho. Cores de alto contraste são essenciais para legibilidade.',
      },
      {
        title: 'Cores acessíveis',
        desc: 'Evite tons sutis e use elementos redundantes — como ícones ou texto — para suportar informações codificadas por cor.',
      },
      {
        title: 'Saturação e brilho em equilíbrio',
        desc: 'A distinção eficaz de cores requer equilíbrio entre saturação, brilho e intensidade para maximizar a acessibilidade.',
      },
    ],
  },
  {
    id: 6,
    slug: 'visao-periferica',
    headline: 'Nossa Visão Periférica\né Ruim, mas Inteligente',
    tag: 'Atenção Visual',
    image: '/images/slide7.jpg',
    imageAlt: 'Visão periférica e atenção',
    color: 'blue',
    bullets: [
      {
        title: 'Detecção de movimento',
        desc: 'A visão periférica detecta movimentos e mudanças, mas carece de sensibilidade para detalhes — o que é crucial para atrair atenção.',
      },
      {
        title: 'Posicionamento de notificações',
        desc: 'Mensagens de erro e notificações devem ser posicionadas para facilitar a percepção fora do foco visual central.',
      },
      {
        title: 'Animações sutis e guiadas',
        desc: 'Animações sutis, mudanças de cor e sons guiam efetivamente o olhar do usuário sem causar sobrecarga sensorial.',
      },
      {
        title: 'Suporte à orientação espacial',
        desc: 'A visão periférica ajuda os usuários a manter orientação nas interfaces, aprimorando a navegação e reduzindo erros.',
      },
    ],
  },
  {
    id: 7,
    slug: 'atencao-limitada-memoria-imperfeita',
    headline: 'A Atenção é Limitada\ne a Memória é Imperfeita',
    tag: 'Cognição',
    image: '/images/slide8.jpg',
    imageAlt: 'Atenção e memória no design',
    color: 'accent',
    bullets: [
      {
        title: 'Atenção humana limitada',
        desc: 'A atenção humana não consegue se concentrar em muitos itens simultaneamente, exigindo um design de interface cuidadoso e focado.',
      },
      {
        title: 'Memória de curto prazo volátil',
        desc: 'A memória de curto prazo é instável — interfaces nunca devem depender que os usuários memorizem informações entre telas.',
      },
      {
        title: 'Design para visibilidade',
        desc: 'Mantenha o status do sistema e as informações relevantes sempre visíveis para reduzir a carga cognitiva e erros do usuário.',
      },
      {
        title: 'Feedback imediato',
        desc: 'Fornecer feedback imediato após ações do usuário ajuda a reforçar a memória e orientar os próximos passos efetivamente.',
      },
    ],
  },
  {
    id: 8,
    slug: 'limites-atencao-pensamento-acao',
    headline: 'Limites na Atenção,\nPensamento e Ação',
    tag: 'Fluxo Cognitivo',
    image: '/images/slide9.jpg',
    imageAlt: 'Limites cognitivos na ação',
    color: 'blue',
    bullets: [
      {
        title: 'Foco na meta do usuário',
        desc: 'Usuários se concentram em objetivos, muitas vezes ignorando as ferramentas que usam, preferindo fluxos de trabalho familiares.',
      },
      {
        title: 'Design de interface guiada',
        desc: 'Interfaces devem orientar claramente os usuários com indicadores de progresso, listas de tarefas e confirmações visuais.',
      },
      {
        title: 'Suportando o ciclo cognitivo',
        desc: 'O design deve suportar o ciclo cognitivo completo: definição de metas, execução e estágios de avaliação.',
      },
      {
        title: 'Antecipe comportamentos',
        desc: 'Antecipe comportamentos comuns e auxilie em ações incompletas para reduzir erros e aumentar a satisfação do usuário.',
      },
    ],
  },
  {
    id: 9,
    slug: 'reconhecer-facil-lembrar-dificil',
    headline: 'Reconhecer é Fácil,\nLembrar é Difícil',
    tag: 'Memória',
    image: '/images/slide10.jpg',
    imageAlt: 'Reconhecimento vs recall na memória',
    color: 'accent',
    bullets: [
      {
        title: 'Reconhecimento sobre recall',
        desc: 'O reconhecimento é cognitivamente mais simples do que recuperar algo da memória — deve ser sempre priorizado no design.',
      },
      {
        title: 'Elementos visuais como âncoras',
        desc: 'Ícones, miniaturas e históricos de ações ajudam os usuários a identificar opções rapidamente, reduzindo a necessidade de memorização.',
      },
      {
        title: 'Design focado em acessibilidade',
        desc: 'Interfaces focadas em reconhecimento reduzem a carga cognitiva e melhoram a acessibilidade para todos os usuários.',
      },
    ],
  },
  {
    id: 10,
    slug: 'aprender-com-experiencia',
    headline: 'Aprender com a Experiência\né Fácil, Resolver Problemas é Difícil',
    tag: 'Aprendizado',
    image: '/images/slide11.jpg',
    imageAlt: 'Aprendizado por experiência em UX',
    color: 'blue',
    bullets: [
      {
        title: 'Aprendizado por repetição',
        desc: 'Usuários aprendem de forma mais eficaz pela repetição e experiência direta do que pela resolução de problemas abstratos e complexos.',
      },
      {
        title: 'Interfaces consistentes e previsíveis',
        desc: 'Interfaces devem ser consistentes, previsíveis e usar vocabulário familiar com padrões de interação reconhecíveis.',
      },
      {
        title: 'Suporte à recuperação de erros',
        desc: 'O design deve apoiar o aprendizado com erros, fornecendo feedback claro e opções fáceis de recuperação e reversão.',
      },
    ],
  },
  {
    id: 11,
    slug: 'fatores-aprendizagem',
    headline: 'Fatores que Afetam\na Aprendizagem',
    tag: 'UX Educativo',
    image: '/images/slide12.jpg',
    imageAlt: 'Fatores cognitivos no aprendizado',
    color: 'accent',
    bullets: [
      {
        title: 'Tarefas simplificadas',
        desc: 'Tarefas simples e vocabulário orientado para a ação reduzem os erros do usuário e facilitam o processo de aprendizado.',
      },
      {
        title: 'Consistência no design',
        desc: 'O design visual e funcional consistente suporta a memorização e a formação de modelos mentais precisos.',
      },
      {
        title: 'Ferramentas de apoio ao aprendizado',
        desc: 'O uso de tutoriais, dicas contextuais e exemplos práticos melhora significativamente a assimilação de informações.',
      },
      {
        title: 'Design cognitivo',
        desc: 'O design que respeita os fatores cognitivos promove a autonomia do usuário e aumenta sua confiança no sistema.',
      },
    ],
  },
  {
    id: 12,
    slug: 'limites-de-tempo',
    headline: 'Temos\nLimites de Tempo',
    tag: 'Performance',
    image: '/images/slide13.jpg',
    imageAlt: 'Tempo e eficiência em interfaces',
    color: 'blue',
    bullets: [
      {
        title: 'Velocidade da interface',
        desc: 'Usuários enfrentam restrições de tempo — interfaces devem ser rápidas e responsivas para aumentar a eficiência e reduzir a frustração.',
      },
      {
        title: 'Indicadores de progresso',
        desc: 'Barras de progresso, estimativas de tempo e opções de cancelamento ajudam os usuários a gerenciar expectativas e controlar tarefas.',
      },
      {
        title: 'Esforço mínimo, máxima satisfação',
        desc: 'Projetos que permitem a conclusão de tarefas com o mínimo de esforço aumentam produtividade e satisfação do usuário.',
      },
    ],
  },
];

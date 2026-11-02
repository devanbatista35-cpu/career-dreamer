/**
 * Resposta REAL do backend (POST /api/career-match), usada em
 * resultado.html?exemplo para testar a página sem chamar a API.
 */
const DADOS_EXEMPLO = {
  user_name: 'Ana Maria Clara',
  career_identity_statement:
    'Olá Ana Maria Clara! A análise do seu perfil vocacional revelou uma forte sinergia entre suas atividades de lazer (dançar, cantar) e seus interesses em design de jogos, desenvolvimento de pessoas. Essa combinação evidencia um talento para unir criatividade prática, visão estruturada e construção de soluções centradas no impacto para pessoas e negócios em tecnologia.',
  recommended_careers: [
    {
      id: 'game-developer',
      title: 'Desenvolvedor(a) de Jogos Digitais & Sistemas Interativos',
      match_score: 97,
      summary: 'Combina criatividade, narrativa e código avançado para construir mundos virtuais envolventes, mecânicas interativas e sistemas gamificados.',
      key_skills: [
        'Motores de Jogos (Unity / Godot / Unreal)',
        'Programação C# / C++ e Lógica de Gameplay',
        'Física para Jogos & Álgebra Vetorial Básica',
        'Otimização Gráfica & Shader Programming',
        'Game Design & Psicologia do Jogador',
      ],
      learning_path: [
        'Lógica de programação aplicada a games, loop de jogo (game loop) e física básica 2D/3D',
        'Implementação de mecânicas de gameplay, inteligência artificial de NPCs e controle de câmera',
        'Integração de trilha sonora, efeitos especiais (VFX) e polimento de interface de usuário',
        'Otimização de taxas de quadros (FPS), profiling de memória e exportação multiplataforma',
      ],
    },
    {
      id: 'frontend-engineer',
      title: 'Engenheiro(a) de Front-End & Aplicações Web',
      match_score: 89,
      summary: 'Une criatividade visual e raciocínio lógico para transformar layouts em aplicações web fluidas, responsivas e de alta performance.',
      key_skills: [
        'HTML5 Semântico & CSS Moderno',
        'JavaScript Moderno (ES6+) & TypeScript',
        'React.js / Next.js / Vue.js',
        'Consumo de APIs REST & GraphQL',
        'Core Web Vitals & Otimização de Performance',
      ],
      learning_path: [
        'Domínio das fundações da Web: HTML semântico, CSS Grid/Flexbox e manipulação avançada da DOM',
        'JavaScript assíncrono, consumo de serviços REST e programação modular com TypeScript',
        'Desenvolvimento de Single Page Applications (SPAs) com gerenciamento de estado moderno',
        'Arquitetura de componentes reutilizáveis, testes unitários de interface e CI/CD para web',
      ],
    },
    {
      id: 'product-manager-tech',
      title: 'Gerente de Produto de Tecnologia (Product Manager)',
      match_score: 82,
      summary: 'Define a visão estratégica de produtos digitais, alinhando necessidades dos usuários, viabilidade técnica da engenharia e objetivos de negócio.',
      key_skills: [
        'Descoberta de Produto (Product Discovery)',
        'Metodologias Ágeis (Scrum & Kanban)',
        'Definição de Métricas e Objetivos (OKRs / KPIs)',
        'Priorização com Frameworks (RICE, MoSCoW)',
        'Comunicação Assertiva com Stakeholders',
      ],
      learning_path: [
        'Conceitos de ciclo de vida de produto, técnicas de entrevista e mapeamento de jornadas de usuário',
        'Construção de roadmaps estratégicos e estruturação de hipóteses de negócio validadas',
        'Gestão de backlog, escrita de histórias de usuário e cerimônias ágeis com equipes técnicas',
        'Análise de métricas de engajamento, monetização e retenção para evolução iterativa do produto',
      ],
    },
    {
      id: 'ui-ux-specialist',
      title: 'Especialista em UI/UX e Acessibilidade',
      match_score: 74,
      summary: 'Conecta seu interesse em design e sensibilidade visual à construção de produtos digitais intuitivos e acessíveis a todas as pessoas.',
      key_skills: [
        'Figma & Prototipagem',
        'Diretrizes WCAG (Acessibilidade)',
        'Design Systems',
        'Pesquisa com Usuários (UX Research)',
        'Arquitetura de Informação',
      ],
      learning_path: [
        'Fundamentos de Design Centrado no Usuário (UCD), tipografia e teoria das cores',
        'Diretrizes Internacionais de Acessibilidade Web (WCAG 2.2) e testes com leitores de tela',
        'Criação de fluxos de navegação e prototipagem interativa de alta fidelidade no Figma',
        'Condução de testes de usabilidade práticos e manutenção de Design Systems escaláveis',
      ],
    },
  ],
};

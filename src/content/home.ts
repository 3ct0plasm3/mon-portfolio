import type { Lang } from '../i18n/LanguageContext'

export interface Project {
  title: string
  description: string
  githubUrl?: string
  detailPath?: string
  isPlaceholder?: boolean
}

type ProjectKey = 'violette' | 'catharsid' | 'cda' | 'maCommuneVivante'

const frProjects: Record<ProjectKey, Project> = {
  violette: {
    title: 'Violette',
    description:
      'Site et boutique sur mesure pour une artiste : écrits, galerie, vente en ligne et administration autonome.',
    detailPath: '/projets/violette',
  },
  catharsid: { title: 'Catharsid', description: 'Projet à venir.', isPlaceholder: true },
  cda: { title: 'ASBL CDA', description: 'Projet à venir.', isPlaceholder: true },
  maCommuneVivante: {
    title: 'Ma Commune Vivante',
    description:
      'Une infrastructure territoriale collaborative pour reconnecter citoyens, associations et communes autour de la gestion durable du vivant.',
    detailPath: '/projets/ma-commune-vivante',
  },
}

const enProjects: Record<ProjectKey, Project> = {
  violette: {
    title: 'Violette',
    description:
      'A bespoke website and shop for an artist: writing, gallery, online sales and independent management.',
    detailPath: '/projets/violette',
  },
  catharsid: { title: 'Catharsid', description: 'Upcoming project.', isPlaceholder: true },
  cda: { title: 'CDA non-profit', description: 'Upcoming project.', isPlaceholder: true },
  maCommuneVivante: {
    title: 'Ma Commune Vivante',
    description:
      'A collaborative territorial infrastructure reconnecting citizens, non-profits and municipalities around the sustainable management of living ecosystems.',
    detailPath: '/projets/ma-commune-vivante',
  },
}

const fr = {
  heroEyebrow: 'Développeuse web fullstack',
  heroTitle: "Des sites à l'âme forte,",
  heroTitleAccent: 'construits pour durer',
  heroIntro:
    "Je conçois des plateformes robustes, fluides et pensées pour durer. De la structure technique au design final, j'allie exigence et créativité pour donner vie à tout type de projet, avec une affinité particulière pour les initiatives engagées et artistiques.",
  approachEyebrow: '§ I — Approche',
  approachTitle: 'Mes Piliers',
  values: [
    {
      title: 'Design & Identité',
      description:
        "Mon approche privilégie le sur-mesure pour garantir une interface unique. Si je peux intégrer des templates selon vos besoins, je préfère m'immerger dans votre univers pour traduire fidèlement votre identité visuelle.",
    },
    {
      title: 'Code Éthique & Performant',
      description:
        'Architecture technique complète (Front & Back), code propre et sécurisé. Je construis des outils robustes, optimisés pour la performance et pensés pour durer.',
    },
    {
      title: 'Collaboration & Valeurs',
      description:
        "Mon travail s'oriente naturellement vers les projets alignés avec mes valeurs (associations, artistes, acteurs engagés). Cette sensibilité ne me limite pas : j'aime relever les défis techniques, quel que soit votre secteur.",
    },
  ],
  portfolioEyebrow: '§ II — Portfolio',
  portfolioTitle: 'Projets',
  learnMore: 'En savoir plus',
  sourceCode: 'Code source',
  comingSoon: 'Bientôt disponible',
  // Sélection de l'accueil
  projects: [frProjects.violette, frProjects.cda, frProjects.catharsid],
  seeAllProjects: 'Voir tous les projets',
  // Page /projets : ajouter ici les prochains projets
  allProjects: [
    frProjects.violette,
    frProjects.catharsid,
    frProjects.cda,
    frProjects.maCommuneVivante,
  ],
  allProjectsEyebrow: '§ Portfolio',
  allProjectsTitle: 'Tous mes projets',
  processEyebrow: '§ III — Méthode',
  processTitle: 'Comment je travaille',
  processIntro: "Quatre étapes simples pour avancer ensemble, même si c'est votre premier site.",
  process: [
    { title: 'Échange', description: 'Nous parlons de votre projet, de vos besoins et de votre univers.' },
    { title: 'Maquette', description: 'Je vous présente une première version visuelle du site, à ajuster avec vous.' },
    { title: 'Développement', description: 'Je construis le site à partir de la maquette validée.' },
    { title: 'Mise en ligne', description: "Le site s'éveille enfin. Si un détail ne vous ressemble pas, on en parle et je reprends le code." },
  ],
  skillsEyebrow: '§ IV — Skills',
  skillsTitle: 'Skills',
  skillsIntro: "Une sélection d'outils pour concevoir des produits soignés, performants et durables.",
  skillCategories: [
    {
      title: 'Design & UI/UX',
      skills: [
        { name: 'Figma', description: 'Prototypage haute fidélité & Design Systems scalables.' },
        { name: 'Tailwind CSS', description: 'Intégration agile, esthétique sur-mesure & responsive.' },
        { name: 'Framer Motion', description: 'Micro-interactions intuitives & storytelling animé.' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'TypeScript', description: 'Développement robuste, typage strict & code maintenable.' },
        { name: 'React / Next.js', description: 'Interfaces réactives, performantes & optimisées pour le SEO.' },
        { name: 'TanStack Query', description: 'Gestion intelligente des données serveur & expérience utilisateur fluide.' },
      ],
    },
    {
      title: 'Backend & DevOps',
      skills: [
        { name: 'Node.js', description: 'Architecture serveur scalable, rapide & fiable.' },
        { name: 'PostgreSQL', description: 'Conception de bases de données relationnelles structurées & sécurisées.' },
        { name: 'Sanity', description: 'CMS headless & modèles de contenu sur mesure.' },
        { name: 'Stripe', description: 'Paiement en ligne sécurisé & webhooks.' },
        { name: 'Git', description: 'Workflow de versioning rigoureux & collaboration continue.' },
      ],
    },
  ],
  ctaTitle: "Besoin d'un partenaire technique ?",
  ctaText: 'Travaillons ensemble sur votre prochain projet.',
  ctaButton: 'Envoyer un message',
  profileEyebrow: '§ V — Profil',
  profileTitle: 'À propos',
  about: [
    'Développeuse web fullstack, je conçois des plateformes numériques où le design rencontre la rigueur technique. Mon approche repose sur une connexion directe avec votre univers : mon rôle est de traduire votre identité dans une interface sécurisée, performante et pensée pour durer.',
    "Ce qui m'anime, c'est de bâtir des outils qui ont un impact positif. Si j'aime particulièrement collaborer avec des artistes, des associations et des structures engagées dans la transition écologique, ma curiosité technique me pousse à explorer tous les horizons.",
    "Vous cherchez une partenaire capable d'allier une esthétique forte à une architecture web robuste ? Je suis là pour relever votre défi avec la même exigence technique, quel que soit votre domaine.",
  ],
  taglineStart: 'Ensemble, donnons vie à vos idées,',
  taglineEnd: 'un pixel à la fois.',
}

const en: typeof fr = {
  heroEyebrow: 'Fullstack web developer',
  heroTitle: 'Websites with a strong soul,',
  heroTitleAccent: 'built to last',
  heroIntro:
    'I design robust, fluid platforms built to last. From the technical structure to the final design, I combine rigour and creativity to bring any kind of project to life, with a particular affinity for committed and artistic initiatives.',
  approachEyebrow: '§ I — Approach',
  approachTitle: 'My Pillars',
  values: [
    {
      title: 'Design & Identity',
      description:
        "I favour bespoke work to guarantee a unique interface. I can integrate templates if your project needs them, but I prefer to immerse myself in your world and faithfully translate your visual identity.",
    },
    {
      title: 'Ethical, High-Performance Code',
      description:
        'Complete technical architecture (front and back end), with clean, secure code. I build robust tools, optimised for performance and designed to last.',
    },
    {
      title: 'Collaboration & Values',
      description:
        "My work naturally leans towards projects aligned with my values (non-profits, artists, committed organisations). That sensibility doesn't limit me: I enjoy technical challenges, whatever your sector.",
    },
  ],
  portfolioEyebrow: '§ II — Portfolio',
  portfolioTitle: 'Projects',
  learnMore: 'Learn more',
  sourceCode: 'Source code',
  comingSoon: 'Coming soon',
  projects: [enProjects.violette, enProjects.cda, enProjects.catharsid],
  seeAllProjects: 'See all projects',
  allProjects: [
    enProjects.violette,
    enProjects.catharsid,
    enProjects.cda,
    enProjects.maCommuneVivante,
  ],
  allProjectsEyebrow: '§ Portfolio',
  allProjectsTitle: 'All my projects',
  processEyebrow: '§ III — Method',
  processTitle: 'How I work',
  processIntro: "Four simple steps to move forward together, even if it's your first website.",
  process: [
    { title: 'Conversation', description: 'We talk about your project, your needs and your world.' },
    { title: 'Mock-up', description: 'I show you a first visual version of the site, to adjust together.' },
    { title: 'Development', description: 'I build the site from the approved mock-up.' },
    { title: 'Launch', description: "The site finally awakens. If a detail doesn't feel like you, we talk it over and I rework the code." },
  ],
  skillsEyebrow: '§ IV — Skills',
  skillsTitle: 'Skills',
  skillsIntro: 'A selection of tools for designing polished, high-performance and lasting products.',
  skillCategories: [
    {
      title: 'Design & UI/UX',
      skills: [
        { name: 'Figma', description: 'High-fidelity prototyping & scalable design systems.' },
        { name: 'Tailwind CSS', description: 'Agile integration, bespoke aesthetics & responsive layouts.' },
        { name: 'Framer Motion', description: 'Intuitive micro-interactions & animated storytelling.' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'TypeScript', description: 'Robust development, strict typing & maintainable code.' },
        { name: 'React / Next.js', description: 'Reactive, high-performance interfaces optimised for SEO.' },
        { name: 'TanStack Query', description: 'Smart server-data management & a smooth user experience.' },
      ],
    },
    {
      title: 'Backend & DevOps',
      skills: [
        { name: 'Node.js', description: 'Scalable, fast & reliable server architecture.' },
        { name: 'PostgreSQL', description: 'Design of structured & secure relational databases.' },
        { name: 'Sanity', description: 'Headless CMS & bespoke content models.' },
        { name: 'Stripe', description: 'Secure online payments & webhooks.' },
        { name: 'Git', description: 'Rigorous versioning workflow & continuous collaboration.' },
      ],
    },
  ],
  ctaTitle: 'Looking for a technical partner?',
  ctaText: "Let's work together on your next project.",
  ctaButton: 'Send a message',
  profileEyebrow: '§ V — Profile',
  profileTitle: 'About',
  about: [
    'As a fullstack web developer, I design digital platforms where design meets technical rigour. My approach rests on a direct connection with your world: my role is to translate your identity into a secure, high-performance interface built to last.',
    "What drives me is building tools with a positive impact. I particularly enjoy working with artists, non-profits and organisations committed to the ecological transition, but my technical curiosity takes me into every field.",
    'Looking for a partner who can combine a strong aesthetic with robust web architecture? I am here to take on your challenge with the same technical standards, whatever your field.',
  ],
  taglineStart: "Together, let's bring your ideas to life,",
  taglineEnd: 'one pixel at a time.',
}

export const homeContent: Record<Lang, typeof fr> = { fr, en }

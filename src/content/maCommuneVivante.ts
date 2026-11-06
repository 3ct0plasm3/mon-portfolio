import type { Lang } from '../i18n/LanguageContext'

const fr = {
  back: 'Retour',
  eyebrow: '§ Projet — Infrastructure territoriale',
  intro:
    'Un écosystème numérique souverain conçu pour reconnecter les citoyens, les associations et les institutions autour de la gestion durable du territoire.',
  status: 'Validation partenariale — 2026',
  demo: 'Demander une démonstration',
  demoSubject: 'Démonstration Ma Commune Vivante',
  projectEyebrow: '§ Le Projet',
  projectTitle: "Une infrastructure, bien plus qu'une plateforme",
  projectText:
    "Ma Commune Vivante dépasse la simple plateforme de signalement. C'est une infrastructure de coordination qui transforme l'engagement individuel en action publique structurée. Qu'il s'agisse de restaurer la biodiversité, de gérer les urgences faune ou de planifier la végétalisation, l'outil offre un espace neutre où chaque acteur — citoyen, association ou commune — peut contribuer à la résilience locale sur la base de données factuelles et vérifiées.",
  cycleEyebrow: '§ Cycle opérationnel',
  cycleTitle: 'Observer · Coordonner · Transformer',
  cycle: [
    {
      title: 'Observer',
      subtitle: 'Le Signalement',
      description:
        "Une cartographie interactive centralise les signalements environnementaux, projets citoyens et institutionnels, et déclenche une cascade d'alerte dédiée pour les urgences faune.",
    },
    {
      title: 'Coordonner',
      subtitle: 'La Logistique',
      description:
        "Un système de gestion des ressources et des compétences (bourse aux ressources) permet d'allouer les moyens nécessaires à chaque projet sans médiation complexe.",
    },
    {
      title: 'Transformer',
      subtitle: "L'Impact",
      description:
        "Chaque action est suivie jusqu'à son terme, alimentant automatiquement les indicateurs de résilience du territoire (Score du Vivant) pour aider à la décision publique.",
    },
  ],
  stackEyebrow: '§ Stack Technique',
  stackTitle: 'Une base conçue pour durer',
  stack: [
    {
      label: 'Frontend',
      tools: 'Next.js, TypeScript, Tailwind CSS',
      detail: 'Une interface accessible, typée et maintenable.',
    },
    {
      label: 'Backend',
      tools: 'Supabase, PostgreSQL, PostGIS',
      detail: 'Des données territoriales structurées et géolocalisées.',
    },
    {
      label: 'Architecture',
      tools: 'Row Level Security, multi-tenant',
      detail: 'Une isolation stricte des données par commune.',
    },
    {
      label: 'Qualité',
      tools: 'Git, validation et auditabilité',
      detail: 'Un développement traçable, pérenne et réversible.',
    },
  ],
  challengesEyebrow: '§ Enjeux techniques résolus',
  challengesTitle: 'Défis & Solutions',
  challengesIntro:
    'Next.js (App Router), TypeScript, Supabase (PostgreSQL + PostGIS) — mis au service de problèmes concrets de gouvernance territoriale.',
  challengeLabel: 'Défi :',
  solutionLabel: 'Solution :',
  challenges: [
    {
      challenge: 'Souveraineté des données',
      solution:
        'Architecture multi-tenant native avec isolation stricte des données par commune (PostgreSQL + Row Level Security).',
    },
    {
      challenge: 'Analyse territoriale',
      solution:
        "Utilisation de PostGIS pour la gestion cartographique et l'analyse spatiale des enjeux du territoire.",
    },
    {
      challenge: 'Aide à la décision',
      solution:
        'Un moteur de calcul dédié convertit signalements et actions en indicateurs de résilience territoriale (Score du Vivant), pour objectiver la décision publique.',
    },
  ],
  methodEyebrow: '§ Méthodologie & Transparence',
  methodTitle: "Une rigueur pensée pour l'audit",
  methodText:
    "Pour préserver la souveraineté des données territoriales et la sécurité de l'architecture, le code source n'est plus en accès libre durant la phase de validation partenariale. Le développement suit un versioning rigoureux et une architecture conçue pour être auditée. Une démonstration technique peut être organisée sur demande pour les acteurs institutionnels ou partenaires potentiels.",
  visionStart:
    'Vision à terme : une infrastructure évolutive, pensée pour intégrer nativement les futurs outils de mesure de la résilience climatique,',
  visionEnd: 'tout en garantissant la pérennité et la réversibilité des données territoriales.',
}

const en: typeof fr = {
  back: 'Back',
  eyebrow: '§ Project — Territorial infrastructure',
  intro:
    'A sovereign digital ecosystem designed to reconnect citizens, non-profits and institutions around the sustainable management of their territory.',
  status: 'Partner validation — 2026',
  demo: 'Request a demo',
  demoSubject: 'Ma Commune Vivante demo',
  projectEyebrow: '§ The Project',
  projectTitle: 'An infrastructure, far more than a platform',
  projectText:
    'Ma Commune Vivante goes beyond a simple reporting platform. It is a coordination infrastructure that turns individual commitment into structured public action. Whether restoring biodiversity, handling wildlife emergencies or planning greening work, the tool offers a neutral space where every stakeholder — citizen, non-profit or municipality — can contribute to local resilience on the basis of factual, verified data.',
  cycleEyebrow: '§ Operational cycle',
  cycleTitle: 'Observe · Coordinate · Transform',
  cycle: [
    {
      title: 'Observe',
      subtitle: 'Reporting',
      description:
        'An interactive map centralises environmental reports and citizen and institutional projects, and triggers a dedicated alert cascade for wildlife emergencies.',
    },
    {
      title: 'Coordinate',
      subtitle: 'Logistics',
      description:
        'A resource and skills management system (resource exchange) allocates what each project needs without complex mediation.',
    },
    {
      title: 'Transform',
      subtitle: 'Impact',
      description:
        "Every action is tracked through to completion, automatically feeding the territory's resilience indicators (Score du Vivant) to support public decision-making.",
    },
  ],
  stackEyebrow: '§ Tech Stack',
  stackTitle: 'A foundation built to last',
  stack: [
    {
      label: 'Frontend',
      tools: 'Next.js, TypeScript, Tailwind CSS',
      detail: 'An accessible, typed and maintainable interface.',
    },
    {
      label: 'Backend',
      tools: 'Supabase, PostgreSQL, PostGIS',
      detail: 'Structured, geolocated territorial data.',
    },
    {
      label: 'Architecture',
      tools: 'Row Level Security, multi-tenant',
      detail: 'Strict data isolation per municipality.',
    },
    {
      label: 'Quality',
      tools: 'Git, validation and auditability',
      detail: 'Traceable, durable and reversible development.',
    },
  ],
  challengesEyebrow: '§ Technical challenges solved',
  challengesTitle: 'Challenges & Solutions',
  challengesIntro:
    'Next.js (App Router), TypeScript, Supabase (PostgreSQL + PostGIS) — applied to concrete questions of territorial governance.',
  challengeLabel: 'Challenge:',
  solutionLabel: 'Solution:',
  challenges: [
    {
      challenge: 'Data sovereignty',
      solution:
        'Native multi-tenant architecture with strict data isolation per municipality (PostgreSQL + Row Level Security).',
    },
    {
      challenge: 'Territorial analysis',
      solution: "PostGIS handles mapping and spatial analysis of the territory's challenges.",
    },
    {
      challenge: 'Decision support',
      solution:
        'A dedicated calculation engine converts reports and actions into territorial resilience indicators (Score du Vivant), bringing objectivity to public decisions.',
    },
  ],
  methodEyebrow: '§ Methodology & Transparency',
  methodTitle: 'Rigour designed for audit',
  methodText:
    'To protect the sovereignty of territorial data and the security of the architecture, the source code is no longer openly available during the partner validation phase. Development follows rigorous versioning and an architecture designed to be audited. A technical demonstration can be arranged on request for institutional stakeholders or potential partners.',
  visionStart:
    'Long-term vision: an evolving infrastructure, designed to natively integrate future climate resilience measurement tools,',
  visionEnd: 'while guaranteeing the durability and reversibility of territorial data.',
}

export const maCommuneVivanteContent: Record<Lang, typeof fr> = { fr, en }

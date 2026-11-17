import type { Lang } from '../i18n/LanguageContext'

// Texte de Marilou, repris tel quel. Mise en forme en ligne : **gras**, *italique*, `code`.
const fr = {
  back: 'Retour',
  lead: 'Un atelier indépendant de création graphique engagée.',
  tagline:
    'Concevoir, développer et structurer une plateforme dédiée aux créations indépendantes et aux collaborations engagées.',
  intro: [
    "Stickers, affiches, illustrations, textile et éditions : L’Empreinte Libre est un projet personnel imaginé pour réunir les univers d’artistes, d’artisans et d’associations autour de créations qui portent une intention.",
    "Au croisement de la création graphique, de l'entrepreneuriat et du développement web, le projet vise à construire un espace où création indépendante et engagement peuvent trouver leur place, dans un cadre de collaboration transparent.",
  ],
  status: 'Projet personnel · Conception et développement intégral · 2026',
  contact: 'Échanger sur le projet',
  contactSubject: "L'Empreinte Libre",
  visitSite: 'Voir le site',

  preview: {
    eyebrow: '§ Aperçu',
    title: 'Le site en images',
    region: "Captures du site de L'Empreinte Libre",
    previous: 'Image précédente',
    next: 'Image suivante',
    goTo: (index: number) => `Aller à l'image ${index}`,
    position: (index: number, total: number) => `${index} sur ${total}`,
  },
  captures: {
    accueil: {
      label: 'Accueil',
      alt: "Page d'accueil de L'Empreinte Libre : le titre « Des images. Des messages. Des positions. » en collage sur fond aubergine, avec une fleur violette, des étiquettes « Collaborations ouvertes » et une étoile.",
    },
    'le-mur': {
      label: 'Le mur',
      alt: "Page Le mur : « Un espace pour les créations indépendantes », avec la précision qu'aucune collaboration n'est encore signée.",
    },
    'causes-initiatives': {
      label: 'Causes & initiatives',
      alt: "Page Causes & initiatives : « Créer des liens, faire circuler les idées », puis l'encadré « Nos règles de transparence » sur papier ivoire déchiré.",
    },
    collaborer: {
      label: 'Collaborer',
      alt: "Page Collaborer : « Votre création, notre logistique, une collaboration équitable », avec le bouton orange « Proposer une collaboration ».",
    },
    mobile: {
      label: 'Version mobile',
      alt: "Le site de L'Empreinte Libre affiché sur un téléphone.",
    },
  },

  project: {
    eyebrow: '§ Le projet',
    title: "De l'idée à une plateforme évolutive",
    intro: [
      "L’Empreinte Libre est un projet que j'ai imaginé, conçu et développé intégralement. Il ne s'agit pas seulement de créer une boutique en ligne, mais de construire les fondations d'un atelier indépendant : son identité, son fonctionnement, ses outils et les conditions nécessaires à son développement.",
      'Le projet repose sur trois dimensions complémentaires :',
    ],
    dimensions: [
      {
        label: 'La création :',
        text: 'proposer un espace de diffusion pour des créations graphiques originales, des illustrations et des objets porteurs de sens.',
      },
      {
        label: 'La collaboration :',
        text: 'permettre à des artistes, artisans et associations de rejoindre le projet selon des modalités définies et adaptées à chaque partenariat.',
      },
      {
        label: "L'engagement :",
        text: 'développer des initiatives et campagnes solidaires dont les modalités de participation et les éventuelles contributions financières sont explicites et vérifiables.',
      },
    ],
    outro: [
      'Le site est actuellement en phase de pré-lancement. Il présente la démarche, les pistes créatives et les possibilités de collaboration, tandis que les fonctionnalités commerciales restent volontairement désactivées.',
      'Cette approche permet de construire un projet cohérent avant son ouverture au public, sans présenter comme acquis des partenariats, des engagements ou des engagements financiers qui ne sont pas encore établis.',
    ],
  },

  spaces: {
    eyebrow: '§ Conception & organisation',
    title: 'Trois espaces, une même démarche',
    items: [
      {
        title: "L'Atelier",
        subtitle: 'Identité et univers créatif',
        text: "Présenter l'identité de L'Empreinte Libre, ses valeurs, ses orientations graphiques et les différentes catégories de créations envisagées. Construire un univers visuel reconnaissable, capable d'accueillir plusieurs sensibilités artistiques.",
      },
      {
        title: 'Les Collaborations',
        subtitle: 'Artistes, artisans et associations',
        text: "Créer un point d'entrée pour les personnes et structures souhaitant participer au projet. Présenter les différentes possibilités de collaboration, recueillir les demandes de contact et poser un cadre clair autour des droits, des modalités de participation et de la rémunération.",
      },
      {
        title: 'Les Campagnes',
        subtitle: 'Création et initiatives solidaires',
        text: 'Prévoir un espace dédié aux projets collectifs et aux campagnes associant créations et causes. Chaque initiative doit pouvoir présenter ses objectifs, ses partenaires, ses modalités de fonctionnement et les éventuelles contributions associées.',
      },
    ],
    outro:
      'La boutique viendra compléter ces trois espaces lorsque les conditions commerciales, logistiques et administratives seront définies.',
  },

  role: {
    eyebrow: '§ Mon rôle',
    title: 'Une réalisation de bout en bout',
    intro:
      "J'ai assuré seule la conception et la réalisation du projet, de la réflexion initiale à l'architecture technique.",
    items: [
      'Définition du concept, du positionnement et du fonctionnement général.',
      "Conception de l'identité visuelle et de la direction artistique.",
      "Architecture de l'information, organisation des pages et parcours utilisateurs.",
      'Rédaction des contenus et structuration éditoriale.',
      'Développement frontend et intégration responsive.',
      'Mise en place du rendu serveur et du prérendu statique.',
      'Développement des fonctionnalités et de la configuration évolutive.',
      'Tests, optimisation, sécurité et préparation du déploiement.',
    ],
    outro:
      "Cette approche transversale m'a amenée à travailler autant sur les problématiques de conception et d'expérience utilisateur que sur les contraintes techniques et opérationnelles d'un projet destiné à évoluer.",
  },

  stack: {
    eyebrow: '§ Architecture technique',
    title: 'Une base pensée pour évoluer',
    items: [
      {
        label: 'Frontend',
        tools: 'Angular 22 · TypeScript · SCSS',
        paragraphs: [
          "Architecture modulaire fondée sur des composants autonomes (*Standalone Components*), les Signals et la stratégie de détection de changement `OnPush`. Une organisation pensée pour faciliter la maintenance, la réutilisation des composants et l'évolution progressive des fonctionnalités.",
        ],
      },
      {
        label: 'Rendu & référencement',
        tools: 'Angular SSR · Prérendu statique · Open Graph',
        paragraphs: [
          "Mise en place du rendu côté serveur et du prérendu des pages. Chaque page dispose de son contenu HTML initial, de ses titres, descriptions et métadonnées de partage, sans dépendre de l'exécution préalable du JavaScript pour présenter son contenu principal.",
        ],
      },
      {
        label: 'Données & logique applicative',
        tools: 'Données typées · Configuration centralisée · Architecture évolutive',
        paragraphs: [
          'Les contenus éditoriaux, créations, engagements et informations de fabrication sont structurés dans des fichiers de données typés.',
          "Une configuration centralisée permet de contrôler les fonctionnalités disponibles selon le contexte d'utilisation, notamment la distinction entre le mode atelier et le futur mode boutique.",
          'Le panier est développé, mais reste désactivé en phase de pré-lancement.',
        ],
      },
      {
        label: 'Infrastructure & qualité',
        tools: 'Cloudflare Pages · Vitest',
        paragraphs: [
          "Hébergement statique, configuration des en-têtes HTTP pour la sécurité et le cache, gestion d'une page 404 personnalisée et préparation du processus de publication.",
          'Le script de déploiement intègre des vérifications du compte et du projet ciblés, ainsi qu\'une confirmation explicite avant toute publication.',
          "**49 tests unitaires** couvrent les éléments testés de l'application.",
        ],
      },
    ],
  },

  challenges: {
    eyebrow: '§ Défis techniques',
    title: "Des choix de conception au service de l'usage",
    problemLabel: 'Problématique',
    solutionLabel: 'Solution',
    items: [
      {
        title: 'Faire coexister une vitrine et une future boutique',
        problem: [
          "Le projet doit pouvoir présenter un atelier crédible avant de disposer de produits commercialisables, sans nécessiter deux applications distinctes.",
        ],
        solution: [
          "Développement d'un système de configuration centralisé permettant d'activer ou de désactiver les fonctionnalités commerciales. Les prix, le panier et les contenus de démonstration peuvent ainsi être exclus de l'expérience publique sans dupliquer l'application.",
        ],
      },
      {
        title: "Traduire une identité de collage dans une interface web",
        problem: [
          "Reproduire l'aspect spontané et artisanal du collage sans sacrifier la lisibilité, la cohérence visuelle ou les performances, particulièrement sur mobile.",
        ],
        solution: [
          "Création d'un système graphique reposant sur des compositions asymétriques, des papiers déchirés, des superpositions et des éléments graphiques inclinés.",
          "Les effets de découpe utilisent des `clip-path` à profondeur fixe. Les polices variables Bricolage Grotesque, DM Sans et IBM Plex Mono sont auto-hébergées. Les compositions et espacements ont été adaptés individuellement aux différents formats d'écran.",
        ],
      },
      {
        title: 'Préserver la confidentialité sans infrastructure de collecte',
        problem: [
          'Permettre aux visiteurs de contacter le projet sans mettre en place prématurément un système de gestion de données personnelles.',
        ],
        solution: [
          'Les formulaires génèrent des e-mails préremplis plutôt que de transmettre ou stocker les informations sur un serveur.',
          'Le site ne met en place ni cookies de suivi ni statistiques de fréquentation. Une attention particulière est également portée aux informations légales et à la transparence des contenus publiés.',
        ],
      },
      {
        title: 'Sécuriser les opérations de publication',
        problem: [
          'Éviter les erreurs de ciblage lors des déploiements et protéger les autres projets hébergés sur le même compte.',
        ],
        solution: [
          "Développement d'un script de publication qui vérifie explicitement le compte Cloudflare et le projet de destination, contrôle les prérequis techniques et demande une confirmation avant de lancer le déploiement.",
        ],
      },
    ],
  },

  art: {
    eyebrow: '§ Direction artistique & méthodologie',
    title: '« Aubergine alternative »',
    intro: [
      "L'identité visuelle repose sur un univers de collage contemporain : un fond aubergine profond, des papiers ivoire aux contours irréguliers, des aplats framboise et des touches d'orange réservées aux éléments d'interaction.",
      'La typographie associe trois caractères complémentaires :',
    ],
    fonts: [
      { name: 'Bricolage Grotesque', text: 'pour son expressivité et son caractère.' },
      { name: 'DM Sans', text: 'pour le confort de lecture.' },
      { name: 'IBM Plex Mono', text: 'pour les informations secondaires et les éléments fonctionnels.' },
    ],
    outro: [
      "L'ensemble cherche un équilibre entre spontanéité graphique et rigueur d'interface.",
      'La direction artistique est formalisée dans une charte de projet qui encadre les choix visuels, éditoriaux et fonctionnels. Elle définit également les règles de publication : distinction entre intentions et engagements établis, vérification des informations de fabrication et exclusion des contenus fictifs de la présentation publique.',
      'Le site reste volontairement non indexé pendant cette phase de structuration.',
    ],
  },

  result: {
    eyebrow: '§ Résultat',
    title: 'Un projet conçu pour évoluer',
    paragraphs: [
      "L'Empreinte Libre dispose aujourd'hui de son identité, de son architecture applicative, de ses espaces éditoriaux et d'une base technique permettant d'envisager l'ouverture progressive de ses fonctionnalités commerciales.",
      "Au-delà du site lui-même, ce projet m'a permis de mettre en pratique une démarche complète de conception et de développement : partir d'une idée, en définir les usages, construire son identité, traduire ses besoins en architecture technique et préparer son évolution.",
    ],
    closing: 'Concevoir avant de vendre. Structurer avant de promettre. Développer sans perdre de vue le sens du projet.',
  },
}

const en: typeof fr = {
  back: 'Back',
  lead: 'An independent studio for committed graphic design.',
  tagline:
    'Designing, developing and structuring a platform dedicated to independent creations and committed collaborations.',
  intro: [
    "Stickers, posters, illustrations, textiles and publications: L’Empreinte Libre is a personal project imagined to bring together the worlds of artists, craftspeople and non-profits around creations that carry an intention.",
    'At the crossroads of graphic design, entrepreneurship and web development, the project aims to build a space where independent creation and commitment can find their place, within a transparent framework for collaboration.',
  ],
  status: 'Personal project · Full design and development · 2026',
  contact: 'Talk about the project',
  contactSubject: "L'Empreinte Libre",
  visitSite: 'Visit the site',

  preview: {
    eyebrow: '§ Preview',
    title: 'The site in pictures',
    region: "Screenshots of L'Empreinte Libre",
    previous: 'Previous image',
    next: 'Next image',
    goTo: (index: number) => `Go to image ${index}`,
    position: (index: number, total: number) => `${index} of ${total}`,
  },
  captures: {
    accueil: {
      label: 'Home',
      alt: 'Home page of L\'Empreinte Libre: the title "Des images. Des messages. Des positions." as a collage on an aubergine background, with a purple flower, "Collaborations ouvertes" labels and a star.',
    },
    'le-mur': {
      label: 'The wall',
      alt: 'The wall page: "Un espace pour les créations indépendantes", noting that no collaboration has been signed yet.',
    },
    'causes-initiatives': {
      label: 'Causes & initiatives',
      alt: 'Causes & initiatives page: "Créer des liens, faire circuler les idées", then the "Nos règles de transparence" box on torn ivory paper.',
    },
    collaborer: {
      label: 'Collaborate',
      alt: 'Collaborate page: "Votre création, notre logistique, une collaboration équitable", with the orange "Proposer une collaboration" button.',
    },
    mobile: {
      label: 'Mobile version',
      alt: "The L'Empreinte Libre site displayed on a phone.",
    },
  },

  project: {
    eyebrow: '§ The project',
    title: 'From an idea to an evolving platform',
    intro: [
      "L’Empreinte Libre is a project I imagined, designed and developed entirely myself. It is not only about creating an online shop, but about building the foundations of an independent studio: its identity, how it works, its tools and the conditions needed for it to grow.",
      'The project rests on three complementary dimensions:',
    ],
    dimensions: [
      {
        label: 'Creation:',
        text: 'offering a space to share original graphic creations, illustrations and meaningful objects.',
      },
      {
        label: 'Collaboration:',
        text: 'enabling artists, craftspeople and non-profits to join the project on defined terms, adapted to each partnership.',
      },
      {
        label: 'Commitment:',
        text: 'developing solidarity initiatives and campaigns whose terms of participation and any financial contributions are explicit and verifiable.',
      },
    ],
    outro: [
      'The site is currently in its pre-launch phase. It presents the approach, the creative directions and the opportunities for collaboration, while commercial features remain deliberately disabled.',
      'This approach makes it possible to build a coherent project before opening it to the public, without presenting as settled any partnerships, commitments or financial commitments that are not yet established.',
    ],
  },

  spaces: {
    eyebrow: '§ Design & organisation',
    title: 'Three spaces, one approach',
    items: [
      {
        title: 'The Studio',
        subtitle: 'Identity and creative world',
        text: "Presenting L'Empreinte Libre's identity, values, graphic directions and the different categories of creations envisaged. Building a recognisable visual world, able to welcome several artistic sensibilities.",
      },
      {
        title: 'Collaborations',
        subtitle: 'Artists, craftspeople and non-profits',
        text: 'Creating an entry point for people and organisations who wish to take part in the project. Presenting the different ways to collaborate, collecting contact requests and setting a clear framework around rights, terms of participation and remuneration.',
      },
      {
        title: 'Campaigns',
        subtitle: 'Creation and solidarity initiatives',
        text: 'Planning a space dedicated to collective projects and campaigns linking creations and causes. Each initiative must be able to present its goals, its partners, how it works and any associated contributions.',
      },
    ],
    outro:
      'The shop will complete these three spaces once the commercial, logistical and administrative conditions are defined.',
  },

  role: {
    eyebrow: '§ My role',
    title: 'An end-to-end project',
    intro: 'I handled the design and delivery of the project on my own, from the initial thinking to the technical architecture.',
    items: [
      'Defining the concept, positioning and overall operation.',
      'Designing the visual identity and art direction.',
      'Information architecture, page organisation and user journeys.',
      'Writing the content and structuring the editorial line.',
      'Frontend development and responsive integration.',
      'Setting up server-side rendering and static prerendering.',
      'Developing features and the evolving configuration.',
      'Testing, optimisation, security and deployment preparation.',
    ],
    outro:
      'This cross-disciplinary approach led me to work as much on design and user-experience questions as on the technical and operational constraints of a project meant to evolve.',
  },

  stack: {
    eyebrow: '§ Technical architecture',
    title: 'A foundation designed to evolve',
    items: [
      {
        label: 'Frontend',
        tools: 'Angular 22 · TypeScript · SCSS',
        paragraphs: [
          'A modular architecture built on *Standalone Components*, Signals and the `OnPush` change-detection strategy. An organisation designed to ease maintenance, component reuse and the gradual evolution of features.',
        ],
      },
      {
        label: 'Rendering & SEO',
        tools: 'Angular SSR · Static prerendering · Open Graph',
        paragraphs: [
          'Server-side rendering and page prerendering. Each page has its initial HTML content, titles, descriptions and sharing metadata, without relying on JavaScript running first to present its main content.',
        ],
      },
      {
        label: 'Data & application logic',
        tools: 'Typed data · Central configuration · Evolving architecture',
        paragraphs: [
          'Editorial content, creations, commitments and production information are structured in typed data files.',
          'A central configuration controls which features are available depending on the context, in particular the distinction between studio mode and the future shop mode.',
          'The cart is built, but remains disabled during the pre-launch phase.',
        ],
      },
      {
        label: 'Infrastructure & quality',
        tools: 'Cloudflare Pages · Vitest',
        paragraphs: [
          'Static hosting, HTTP security and cache headers, a custom 404 page and a prepared publishing process.',
          'The deployment script checks the target account and project, and asks for explicit confirmation before any publication.',
          "**49 unit tests** cover the tested parts of the application.",
        ],
      },
    ],
  },

  challenges: {
    eyebrow: '§ Technical challenges',
    title: 'Design choices that serve the use',
    problemLabel: 'Problem',
    solutionLabel: 'Solution',
    items: [
      {
        title: 'Making a showcase and a future shop coexist',
        problem: [
          'The project must present a credible studio before having products to sell, without requiring two separate applications.',
        ],
        solution: [
          'A central configuration system that turns commercial features on or off. Prices, the cart and demo content can thus be left out of the public experience without duplicating the application.',
        ],
      },
      {
        title: 'Translating a collage identity into a web interface',
        problem: [
          'Reproducing the spontaneous, handmade feel of collage without sacrificing readability, visual consistency or performance, especially on mobile.',
        ],
        solution: [
          'A graphic system built on asymmetric compositions, torn paper, overlays and tilted graphic elements.',
          'Cut-out effects use fixed-depth `clip-path`. The variable fonts Bricolage Grotesque, DM Sans and IBM Plex Mono are self-hosted. Compositions and spacing were adapted individually to each screen size.',
        ],
      },
      {
        title: 'Protecting privacy without a data-collection infrastructure',
        problem: [
          'Letting visitors contact the project without prematurely setting up a personal-data management system.',
        ],
        solution: [
          'Forms generate pre-filled e-mails instead of sending or storing information on a server.',
          'The site uses neither tracking cookies nor visitor statistics. Particular care is also given to legal information and to the transparency of published content.',
        ],
      },
      {
        title: 'Securing publishing operations',
        problem: [
          'Avoiding targeting mistakes during deployments and protecting the other projects hosted on the same account.',
        ],
        solution: [
          'A publishing script that explicitly checks the Cloudflare account and the target project, verifies the technical prerequisites and asks for confirmation before deploying.',
        ],
      },
    ],
  },

  art: {
    eyebrow: '§ Art direction & methodology',
    title: '"Aubergine alternative"',
    intro: [
      'The visual identity rests on a contemporary collage world: a deep aubergine background, ivory papers with irregular edges, raspberry blocks of colour and touches of orange reserved for interactive elements.',
      'The typography combines three complementary typefaces:',
    ],
    fonts: [
      { name: 'Bricolage Grotesque', text: 'for its expressiveness and character.' },
      { name: 'DM Sans', text: 'for reading comfort.' },
      { name: 'IBM Plex Mono', text: 'for secondary information and functional elements.' },
    ],
    outro: [
      'The whole seeks a balance between graphic spontaneity and interface rigour.',
      'The art direction is formalised in a project charter that frames visual, editorial and functional choices. It also sets the publishing rules: distinguishing intentions from established commitments, verifying production information and excluding placeholder content from the public site.',
      'The site deliberately remains unindexed during this structuring phase.',
    ],
  },

  result: {
    eyebrow: '§ Outcome',
    title: 'A project designed to evolve',
    paragraphs: [
      "L'Empreinte Libre now has its identity, its application architecture, its editorial spaces and a technical foundation that makes it possible to open its commercial features progressively.",
      'Beyond the site itself, this project allowed me to practise a complete design and development process: starting from an idea, defining its uses, building its identity, translating its needs into a technical architecture and preparing its evolution.',
    ],
    closing: 'Design before selling. Structure before promising. Develop without losing sight of what the project means.',
  },
}

export const empreinteLibreContent: Record<Lang, typeof fr> = { fr, en }

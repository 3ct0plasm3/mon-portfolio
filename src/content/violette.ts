import type { Lang } from '../i18n/LanguageContext'

const fr = {
  back: 'Retour',
  eyebrow: "§ Projet — Site & boutique d'artiste",
  intro:
    'Un lieu à son image pour publier ses écrits, montrer son travail et vendre ses créations en toute autonomie.',
  status: 'Validation cliente — 2026',
  demo: 'Demander une démonstration',
  demoSubject: 'Démonstration Violette',
  visitSite: 'Voir le site',
  projectEyebrow: '§ Le Projet',
  projectTitle: "Un univers, bien plus qu'une boutique",
  projectText:
    "Violette réunit peinture, dessin, prints, objets et écrits. Le site rassemble ces pratiques dans un même lieu sensible et organique, loin des plateformes standardisées. Elle y publie seule ses textes, ses images et ses œuvres, et vend directement ses créations, de la pièce unique à l'objet fait main.",
  cycleEyebrow: '§ Cycle opérationnel',
  cycleTitle: 'Publier · Exposer · Vendre',
  cycle: [
    {
      title: 'Publier',
      subtitle: "L'Autonomie",
      description:
        "Un espace d'administration sur mesure permet de gérer écrits, photos, œuvres, prix et stocks, sans développeur et sans redéploiement.",
    },
    {
      title: 'Exposer',
      subtitle: "L'Univers",
      description:
        "Écrits, galerie et fiches d'œuvres prolongent son identité artistique, avec une direction visuelle sombre, organique et presque manuscrite.",
    },
    {
      title: 'Vendre',
      subtitle: 'La Boutique',
      description:
        "Panier, formats multiples, prix libre et paiement sécurisé accompagnent chaque vente, du choix de l'œuvre à la mise à jour du stock.",
    },
  ],
  stackEyebrow: '§ Stack Technique',
  stackTitle: 'Une base conçue pour durer',
  stack: [
    {
      label: 'Frontend',
      tools: 'Next.js, React, TypeScript, Tailwind CSS',
      detail: 'Une interface responsive, typée et maintenable.',
    },
    {
      label: 'Contenu',
      tools: 'Sanity, Portable Text',
      detail: "Un modèle de contenu sur mesure, pensé pour l'artiste.",
    },
    {
      label: 'Paiement',
      tools: 'Stripe Checkout, webhooks',
      detail: 'Un paiement sécurisé et un stock synchronisé.',
    },
    {
      label: 'Infrastructure',
      tools: 'Vercel, ISR',
      detail: 'Des pages rapides, mises à jour automatiquement.',
    },
  ],
  previewEyebrow: '§ Aperçu',
  previewTitle: 'Le site en images',
  captures: {
    'accueil-desktop': {
      label: 'Accueil',
      alt: "Page d'accueil du site de Violette : le titre « Violette, sortir de la violence » sur une illustration organique sombre, au-dessus des accès Écrits, Galerie et Boutique.",
    },
    boutique: {
      label: 'Boutique',
      alt: 'Boutique du site : filtres par type, disponibilité et prix, et deux peintures colorées en vente.',
    },
    'fiche-oeuvre': {
      label: "Fiche d'une œuvre",
      alt: "Fiche de la « Peinture psyché », une peinture abstraite rose et violette, à prix libre dès 5 €, avec un bouton d'ajout au panier.",
    },
    ecrits: {
      label: 'Écrits',
      alt: 'Page des écrits sur fond sombre : un texte publié, avec son titre, sa date et sa catégorie.',
    },
  },
  challengesEyebrow: '§ Enjeux techniques résolus',
  challengesTitle: 'Défis & Solutions',
  challengesIntro: "Next.js, TypeScript, Sanity et Stripe, mis au service d'une artiste indépendante.",
  challengeLabel: 'Défi :',
  solutionLabel: 'Solution :',
  challenges: [
    {
      challenge: 'Fiabilité des ventes',
      solution:
        'Prix et stocks revalidés côté serveur avant chaque paiement, sans jamais se fier au navigateur.',
    },
    {
      challenge: 'Synchronisation du stock',
      solution:
        "Webhooks Stripe signés et idempotents : le stock n'est mis à jour qu'une fois le paiement confirmé, et jamais deux fois pour le même événement.",
    },
    {
      challenge: "Autonomie de l'artiste",
      solution:
        'Administration Sanity sur mesure et pages régénérées automatiquement, pour publier en une à deux minutes.',
    },
  ],
  methodEyebrow: '§ Méthodologie & Transparence',
  methodTitle: "Une validation avant l'ouverture",
  methodText:
    'Le site reste privé pendant la phase de validation avec la cliente, derrière un accès protégé. Une démonstration peut être organisée sur demande.',
  closing:
    "Une identité artistique forte, portée par une architecture fiable, au service d'une créatrice indépendante.",
}

const en: typeof fr = {
  back: 'Back',
  eyebrow: "§ Project — Artist's website & shop",
  intro: 'A place in her own image to publish her writing, show her work and sell her creations independently.',
  status: 'Client validation — 2026',
  demo: 'Request a demo',
  demoSubject: 'Violette demo',
  visitSite: 'Visit the site',
  projectEyebrow: '§ The Project',
  projectTitle: 'A world, far more than a shop',
  projectText:
    'Violette brings together painting, drawing, prints, objects and writing. The site gathers these practices in one sensitive, organic place, far from standardised platforms. She publishes her texts, images and works herself, and sells her creations directly, from one-of-a-kind pieces to handmade objects.',
  cycleEyebrow: '§ Operational cycle',
  cycleTitle: 'Publish · Exhibit · Sell',
  cycle: [
    {
      title: 'Publish',
      subtitle: 'Independence',
      description:
        'A bespoke admin space manages writing, photos, works, prices and stock, with no developer and no redeployment.',
    },
    {
      title: 'Exhibit',
      subtitle: 'The World',
      description:
        'Writing, gallery and artwork pages extend her artistic identity, with a dark, organic, almost handwritten visual direction.',
    },
    {
      title: 'Sell',
      subtitle: 'The Shop',
      description:
        'Cart, multiple formats, pay-what-you-want pricing and secure payment support each sale, from choosing the work to updating the stock.',
    },
  ],
  stackEyebrow: '§ Tech Stack',
  stackTitle: 'A foundation built to last',
  stack: [
    {
      label: 'Frontend',
      tools: 'Next.js, React, TypeScript, Tailwind CSS',
      detail: 'A responsive, typed and maintainable interface.',
    },
    {
      label: 'Content',
      tools: 'Sanity, Portable Text',
      detail: 'A bespoke content model, designed for the artist.',
    },
    {
      label: 'Payment',
      tools: 'Stripe Checkout, webhooks',
      detail: 'Secure payment and synchronised stock.',
    },
    {
      label: 'Infrastructure',
      tools: 'Vercel, ISR',
      detail: 'Fast pages, updated automatically.',
    },
  ],
  previewEyebrow: '§ Preview',
  previewTitle: 'The site in pictures',
  captures: {
    'accueil-desktop': {
      label: 'Home',
      alt: 'Home page of Violette\'s site: the title "Violette, sortir de la violence" over a dark organic illustration, above links to Writing, Gallery and Shop.',
    },
    boutique: {
      label: 'Shop',
      alt: 'The shop: filters by type, availability and price, and two colourful paintings for sale.',
    },
    'fiche-oeuvre': {
      label: 'Artwork page',
      alt: 'Page for "Peinture psyché", an abstract pink and purple painting, pay-what-you-want from €5, with an add-to-cart button.',
    },
    ecrits: {
      label: 'Writing',
      alt: 'Writing page on a dark background: a published text with its title, date and category.',
    },
  },
  challengesEyebrow: '§ Technical challenges solved',
  challengesTitle: 'Challenges & Solutions',
  challengesIntro: 'Next.js, TypeScript, Sanity and Stripe, in the service of an independent artist.',
  challengeLabel: 'Challenge:',
  solutionLabel: 'Solution:',
  challenges: [
    {
      challenge: 'Reliable sales',
      solution: 'Prices and stock revalidated server-side before each payment, never trusting the browser.',
    },
    {
      challenge: 'Stock synchronisation',
      solution:
        'Signed, idempotent Stripe webhooks: stock is updated only once payment is confirmed, and never twice for the same event.',
    },
    {
      challenge: "The artist's independence",
      solution: 'Bespoke Sanity admin and automatically regenerated pages, to publish in one to two minutes.',
    },
  ],
  methodEyebrow: '§ Methodology & Transparency',
  methodTitle: 'A validation before opening',
  methodText:
    'The site remains private during the validation phase with the client, behind protected access. A demonstration can be arranged on request.',
  closing: 'A strong artistic identity, carried by a reliable architecture, in the service of an independent creator.',
}

export const violetteContent: Record<Lang, typeof fr> = { fr, en }

import type { Lang } from '../i18n/LanguageContext'

// Mentions requises en Belgique (Code de droit économique, livre XII ; RGPD).
// Les prestations sont facturées via SmartCoop : ses coordonnées publiques tiennent
// lieu d'adresse d'établissement et de numéro d'entreprise. À vérifier auprès de Smart.
const fr = {
  eyebrow: '§ Informations légales',
  title: 'Mentions légales et confidentialité',
  updated: 'Dernière mise à jour : novembre 2026',
  sections: [
    {
      title: 'Éditrice du site',
      paragraphs: [
        'Ecto.dev — Marilou Nyckees, développeuse web fullstack.',
        'Contact : marilou.ncks@gmail.com, ou via LinkedIn (lien en bas de page).',
        'Les prestations sont facturées via SmartCoop (coopérative Smart), rue Émile Féron 70, 1060 Bruxelles, Belgique. Numéro d’entreprise : 0668.600.511. TVA : BE 0668.600.511.',
      ],
    },
    {
      title: 'Hébergement',
      paragraphs: [
        'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com.',
      ],
    },
    {
      title: 'Propriété intellectuelle',
      paragraphs: [
        'Les textes, visuels et le code de ce site appartiennent à Ecto.dev, sauf mention contraire. Toute reproduction demande une autorisation préalable.',
        'Les captures des projets réalisés pour des clients sont présentées avec leur accord. Leurs contenus restent la propriété de leurs auteurs.',
      ],
    },
    {
      title: 'Données personnelles',
      paragraphs: [
        "Ce site ne contient aucun formulaire, aucun cookie et aucun outil de mesure d'audience.",
        "Si vous m'écrivez, j'utilise votre adresse e-mail et votre message uniquement pour vous répondre et, si vous le souhaitez, établir un devis. Je ne les transmets à personne et je les supprime lorsqu'ils ne sont plus nécessaires.",
        "Pour assurer le fonctionnement et la sécurité du site, l'hébergeur enregistre des journaux techniques, qui contiennent notamment l'adresse IP. Les polices de caractères sont chargées depuis Google Fonts, qui reçoit donc aussi votre adresse IP.",
        "Vous pouvez demander l'accès à vos données, leur correction ou leur suppression en m'écrivant à marilou.ncks@gmail.com. Vous pouvez aussi introduire une plainte auprès de l'Autorité de protection des données (autoriteprotectiondonnees.be).",
      ],
    },
    {
      title: 'Liens externes',
      paragraphs: [
        "Ce site renvoie vers d'autres sites, dont je ne maîtrise pas le contenu ni les pratiques en matière de données.",
      ],
    },
  ],
}

const en: typeof fr = {
  eyebrow: '§ Legal information',
  title: 'Legal notice and privacy',
  updated: 'Last updated: November 2026',
  sections: [
    {
      title: 'Publisher',
      paragraphs: [
        'Ecto.dev — Marilou Nyckees, fullstack web developer.',
        'Contact: marilou.ncks@gmail.com, or via LinkedIn (link at the bottom of the page).',
        'Services are invoiced through SmartCoop (Smart cooperative), rue Émile Féron 70, 1060 Brussels, Belgium. Company number: 0668.600.511. VAT: BE 0668.600.511.',
      ],
    },
    {
      title: 'Hosting',
      paragraphs: [
        'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States — vercel.com.',
      ],
    },
    {
      title: 'Intellectual property',
      paragraphs: [
        'The text, visuals and code of this site belong to Ecto.dev, unless stated otherwise. Any reproduction requires prior permission.',
        'Screenshots of client projects are shown with their consent. Their content remains the property of their authors.',
      ],
    },
    {
      title: 'Personal data',
      paragraphs: [
        'This site has no forms, no cookies and no analytics.',
        'If you write to me, I use your e-mail address and message only to reply and, if you wish, to prepare a quote. I share them with no one and delete them once they are no longer needed.',
        'To keep the site running and secure, the host records technical logs, which include your IP address. Fonts are loaded from Google Fonts, which therefore also receives your IP address.',
        'You can request access to, correction or deletion of your data by writing to marilou.ncks@gmail.com. You may also lodge a complaint with the Belgian Data Protection Authority (dataprotectionauthority.be).',
      ],
    },
    {
      title: 'External links',
      paragraphs: [
        'This site links to other websites, whose content and data practices I do not control.',
      ],
    },
  ],
}

export const legalContent: Record<Lang, typeof fr> = { fr, en }

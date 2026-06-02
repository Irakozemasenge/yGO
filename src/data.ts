export interface Value {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const ygoData = {
  // Informations générales
  companyName: "yGO",
  slogan: "Innovation, Intelligence et Impact Digital",
  
  // Mission et Vision
  mission: "Transformer les idées ambitieuses en solutions digitales innovantes qui créent de la valeur durable pour nos clients et la société. Nous nous engageons à repousser les limites du possible pour façonner un avenir numérique plus intelligent et plus humain.",
  
  vision: "Devenir le partenaire stratégique de référence en transformation digitale, reconnu pour notre capacité à allier expertise technique, créativité et vision d'avenir pour accélérer le succès des entreprises dans l'ère numérique.",
  
  // Charte des valeurs
  values: [
    {
      id: 1,
      title: "Innovation",
      description: "Nous cultivons la créativité et l'audace pour développer des solutions qui transforment positivement les businesses et améliorent la vie quotidienne.",
      icon: "💡"
    },
    {
      id: 2,
      title: "Excellence",
      description: "Nous nous engageons à livrer des résultats de la plus haute qualité, en dépassant systématiquement les attentes de nos clients.",
      icon: "🏆"
    },
    {
      id: 3,
      title: "Intégrité",
      description: "Nous agissons avec transparence, honnêteté et éthique dans toutes nos interactions professionnelles et commerciales.",
      icon: "🤝"
    },
    {
      id: 4,
      title: "Collaboration",
      description: "Nous croyons au pouvoir du travail d'équipe et au partenariat pour co-créer des solutions innovantes et durables.",
      icon: "🤝"
    },
    {
      id: 5,
      title: "Agilité",
      description: "Nous nous adaptons rapidement aux changements du marché et aux besoins évolutifs de nos clients avec flexibilité et réactivité.",
      icon: "⚡"
    },
    {
      id: 6,
      title: "Impact",
      description: "Nous mesurons notre succès par l'impact positif et tangible que nous créons pour nos clients, nos équipes et la société.",
      icon: "🎯"
    }
  ] as Value[],
  
  // Services principaux — Développement & IA en priorité, puis produits existants
  services: [
    {
      id: 1,
      title: "Développement de Plateformes",
      description: "Sites web, applications mobiles et solutions digitales robustes, sécurisées et évolutives (e-services, fintech, e-santé, e-learning, etc.).",
      icon: "💻",
      features: [
        "Applications web modernes",
        "Développement mobile iOS/Android",
        "Plateformes e-commerce et e-services",
        "Solutions fintech et e-santé"
      ]
    },
    {
      id: 2,
      title: "Intelligence Artificielle Appliquée",
      description: "Conception de solutions IA innovantes pour la santé, la finance, l'éducation et les services publics. Exemple : SANIA, assistant intelligent en santé.",
      icon: "🧠",
      features: [
        "Machine Learning et Deep Learning",
        "Traitement du langage naturel",
        "Assistants intelligents (ex: SANIA)",
        "Solutions IA pour la santé et finance"
      ]
    },
    {
      id: 3,
      title: "Analyse de Données et Data Intelligence",
      description: "Collecte, analyse et visualisation des données pour aider à la prise de décision et créer plus de valeur dans tous les secteurs.",
      icon: "📊",
      features: [
        "Business Intelligence",
        "Data Visualization",
        "Big Data Processing",
        "Data Governance et stratégie"
      ]
    },
    {
      id: 4,
      title: "Automatisation des Services",
      description: "Digitalisation et automatisation des processus pour les entreprises, administrations et organisations. Moins de tâches manuelles, plus d'efficacité.",
      icon: "⚙️",
      features: [
        "Automatisation des workflows",
        "Digitalisation des processus",
        "Intégration de systèmes",
        "Réduction des tâches manuelles"
      ]
    },
    {
      id: 5,
      title: "Stratégie Digitale et Transformation",
      description: "Nous accompagnons entreprises et institutions dans leur transformation digitale avec des stratégies adaptées au contexte africain.",
      icon: "🎯",
      features: [
        "Audit digital complet",
        "Feuille de route stratégique",
        "Accompagnement au changement",
        "Optimisation des processus métier"
      ]
    },
    {
      id: 6,
      title: "Marketing Digital et Croissance",
      description: "Stratégies digitales performantes pour accroître votre visibilité, attirer des clients et booster votre croissance (SEO, publicité, réseaux sociaux, branding).",
      icon: "📣",
      features: [
        "SEO et référencement naturel",
        "Publicité digitale ciblée",
        "Gestion des réseaux sociaux",
        "Branding et identité visuelle"
      ]
    },
    {
      id: 7,
      title: "Écosystèmes Numériques et Innovation Locale",
      description: "Création d'écosystèmes et de solutions digitales adaptées aux réalités africaines pour un impact durable et inclusif.",
      icon: "🌍",
      features: [
        "Création d'écosystèmes numériques",
        "Solutions adaptées au contexte africain",
        "Innovation locale et inclusive",
        "Impact social et économique durable"
      ]
    }
  ] as Service[],

  // Hébergement, Domaines & SSL
  hosting: {
    title: "Noms de Domaine, SSL et Hébergement",
    subtitle: "Tout ce qu'il faut pour lancer et sécuriser votre présence en ligne",
    description: "yGO Digital vous accompagne de l'enregistrement de votre nom de domaine jusqu'à la mise en ligne de votre solution, avec des certificats SSL et un hébergement fiable pour vos sites web et applications mobiles.",
    services: [
      {
        icon: "🌐",
        title: "Noms de Domaine",
        description: "Enregistrement et gestion de noms de domaine dans toutes les extensions disponibles.",
        items: [
          "Extensions génériques : .com, .net, .org, .info, .biz",
          "Extensions africaines : .bi, .cd, .rw, .tz, .ke, .africa",
          "Nouvelles extensions : .tech, .digital, .app, .io, .ai",
          "Extensions locales et professionnelles de toutes catégories",
          "Transfert et renouvellement de domaines existants"
        ]
      },
      {
        icon: "🔒",
        title: "Certificats SSL",
        description: "Sécurisez votre site et rassurez vos visiteurs avec un certificat SSL valide.",
        items: [
          "SSL standard pour sites vitrines et blogs",
          "SSL Wildcard pour sous-domaines multiples",
          "SSL EV pour entreprises et e-commerce",
          "Installation et configuration incluses",
          "Renouvellement automatique disponible"
        ]
      },
      {
        icon: "🖥️",
        title: "Hébergement Web",
        description: "Des serveurs performants et sécurisés pour héberger vos sites et applications web.",
        items: [
          "Hébergement mutualisé pour sites vitrines",
          "Serveurs VPS pour applications évolutives",
          "Hébergement dédié pour grandes plateformes",
          "Déploiement cloud (AWS, Azure, GCP)",
          "Sauvegarde automatique et monitoring 24h/24"
        ]
      },
      {
        icon: "📱",
        title: "Hébergement Mobile et API",
        description: "Infrastructure dédiée pour vos applications mobiles et services backend.",
        items: [
          "Hébergement d'API REST et GraphQL",
          "Bases de données managées",
          "CDN pour performances optimales",
          "Certificats push notifications",
          "Environnements de test et production séparés"
        ]
      }
    ]
  },

  // Plateformes numériques
  platforms: [
    {
      id: 1,
      name: "eBillet.bi",
      description: "Billetterie en ligne simple, sécurisée et rapide.",
      icon: "🎟️",
      color: "from-orange-500 to-red-500",
      url: "https://ebillet.bi",
      apps: [],
      highlights: [
        { icon: "✈️", label: "Billet d'avion" },
        { icon: "🚂", label: "Billet de train" },
        { icon: "🎵", label: "Billet de concert" },
        { icon: "🎭", label: "Billet de théâtre" },
        { icon: "🎬", label: "Billet de cinéma" },
        { icon: "⚽", label: "Billet de match" },
        { icon: "🚌", label: "Billet de bus" },
        { icon: "🏛️", label: "Billet de musée" },
        { icon: "🎰", label: "Billet de tombola" },
        { icon: "🏦", label: "Billet de banque" },
      ]
    },
    {
      id: 2,
      name: "Sania.bi",
      description: "Assistant intelligent en santé pour tous.",
      icon: "🤖",
      color: "from-purple-500 to-indigo-600",
      url: "https://sania.bi",
      apps: [],
      highlights: [
        {
          icon: "🧠",
          label: "Diagnostic intelligent",
          detail: "Notre IA analyse vos symptômes avec précision pour vous orienter vers les bonnes solutions de santé."
        },
        {
          icon: "💊",
          label: "Conseils personnalisés",
          detail: "Recevez des recommandations adaptées à votre profil médical et à vos antécédents."
        },
        {
          icon: "🔒",
          label: "Confidentialité absolue",
          detail: "Vos données médicales sont sécurisées et protégées conformément aux normes de santé."
        },
      ]
    },
    {
      id: 3,
      name: "AfyaClick.bi",
      description: "Services digitaux de santé accessibles à tous.",
      icon: "🩺",
      color: "from-green-500 to-teal-600",
      url: "#",
      apps: [
        {
          name: "AfyaClick pour tous",
          description: "Application grand public pour accéder aux services de santé.",
          url: "https://play.google.com/store/apps/details?id=com.saniaApp"
        },
        {
          name: "AfyaClick Pharma",
          description: "Solution dédiée aux pharmacies.",
          url: "https://play.google.com/store/apps/details?id=com.afyaclickpharma.app"
        },
        {
          name: "AfyaClick Pro",
          description: "Pour les cabinets médicaux et docteurs indépendants.",
          url: "https://play.google.com/store/apps/details?id=com.afyaclikPro"
        }
      ]
    },
    {
      id: 4,
      name: "kashflow.africa",
      description: "Gateway de paiement et solutions financières digitales pour entreprises e-commerce, avec retraits instantanés dans plusieurs pays africains.",
      icon: "💰",
      color: "from-blue-700 to-blue-900",
      url: "https://kashflow.africa",
      apps: [],
      details: {
        tagline: "Encaissez, payez et retirez en Afrique — instantanément.",
        about: "KashFlow.africa est la solution de paiement digital conçue pour les entreprises qui veulent accepter des paiements en ligne et effectuer des transferts rapides dans la région des Grands Lacs africains et au-delà. Nous accompagnons les plateformes e-commerce, les marketplaces et les entreprises de services dans l'intégration de passerelles de paiement fiables.",
        currencies: [
          { code: "BIF", name: "Franc Burundais", flag: "🇧🇮" },
          { code: "UGX", name: "Uganda Shilling", flag: "🇺🇬" },
          { code: "TZS", name: "Tanzania Shilling", flag: "🇹🇿" },
          { code: "KSH", name: "Kenya Shilling", flag: "🇰🇪" },
          { code: "RWF", name: "Rwandan Franc", flag: "🇷🇼" },
          { code: "FCFA", name: "Franc CFA", flag: "🌍" },
          { code: "EUR", name: "Euro", flag: "🇪🇺" },
          { code: "USD", name: "US Dollar", flag: "🇺🇸" },
        ],
        features: [
          {
            icon: "🏪",
            title: "Gateway e-commerce",
            description: "Intégrez KashFlow dans votre boutique en ligne pour accepter les paiements de vos clients sans friction."
          },
          {
            icon: "📱",
            title: "Paiements Mobile Money",
            description: "Acceptez les paiements via les principaux opérateurs mobile money de la région : Lumicash, Ecocash, M-Pesa, MTN MoMo et plus."
          },
          {
            icon: "🏦",
            title: "Virements bancaires via Burundi Pay",
            description: "Effectuez des transferts sécurisés via les services bancaires et financiers du Burundi : iHela Ryanje, Bancobu eNoti, Lumicash Agent et d'autres partenaires locaux.",
            comingSoon: false
          },
          {
            icon: "⚡",
            title: "Retraits instantanés",
            description: "Retirez vos fonds directement vers votre compte mobile money ou bancaire en quelques secondes, 24h/24."
          },
          {
            icon: "💳",
            title: "Carte Visa Virtuelle",
            description: "Nous sommes actuellement en recherche d'un partenaire fiable, courageux et sérieux pour concrétiser l'émission de cartes Visa virtuelles et permettre à nos clients de payer partout dans le monde en ligne.",
            comingSoon: true
          },
          {
            icon: "📊",
            title: "Tableau de bord de gestion",
            description: "Suivi des transactions, rapports financiers, gestion des remboursements et alertes en temps réel.",
            comingSoon: true
          }
        ]
      }
    }
  ],

  // Digital Tech Night Event
  digitalTechNight: {
    title: "Digital Tech Night Event",
    description: "Une plateforme de formation, de networking et d’inspiration dédiée aux passionnés du numérique.",
    presentation: {
      title: "Présentation du projet",
      content: "Digital Tech Night Event est une plateforme de formation, de networking et d’inspiration dédiée aux passionnés du numérique. Notre objectif est de créer un espace accessible à tous, où la technologie devient un levier de développement personnel, entrepreneurial et socio-économique. Chaque session rassemble des développeurs, entrepreneurs, investisseurs, designers, étudiants et talents créatifs autour de projets technologiques, d’échanges et d’opportunités."
    },
    vision: {
      title: "Notre Vision",
      content: "Construire un écosystème technologique burundais solide et compétitif, capable de produire des solutions locales exportables à l’échelle régionale et internationale.",
      points: [
        "Une Afrique créatrice de technologies et non consommatrice passive.",
        "Des jeunes capables de transformer leurs idées en entreprises durables.",
        "Des projets technologiques ayant un impact direct sur la société."
      ]
    },
    mission: {
      title: "Notre Mission",
      points: [
        "Former et accompagner les passionnés de technologie.",
        "Connecter développeurs, entrepreneurs, investisseurs et institutions.",
        "Encourager l’innovation locale.",
        "Créer un réseau de talents capable de résoudre les défis du Burundi et de la région.",
        "Promouvoir la digitalisation des services publics et privés."
      ]
    },
    values: [
      {
        title: "Innovation",
        description: "Nous encourageons les idées audacieuses, la créativité, et l’expérimentation.",
        icon: "💡"
      },
      {
        title: "Impact social",
        description: "Chaque projet doit servir la communauté et améliorer la vie des citoyens.",
        icon: "🌍"
      },
      {
        title: "Collaboration",
        description: "Nous avançons ensemble, en réseau, sans exclusion ni compétition destructrice.",
        icon: "🤝"
      },
      {
        title: "Transparence",
        description: "Nous valorisons la clarté, l’honnêteté et la confiance dans chaque collaboration.",
        icon: "🔍"
      }
    ],
    offerings: {
      developers: {
        title: "Pour les développeurs",
        items: [
          "Sessions techniques (React, IA, IoT, cybersécurité…)",
          "Opportunités de mentorat",
          "Projets concrets à développer",
          "Hackathons et démonstrations"
        ]
      },
      entrepreneurs: {
        title: "Pour les jeunes porteurs de projets",
        items: [
          "Accompagnement à la structuration d’idées",
          "Networking avec des partenaires",
          "Opportunités de financement",
          "Visibilité pour leurs initiatives"
        ]
      },
      investors: {
        title: "Pour les investisseurs",
        items: [
          "Accès à des talents confirmés",
          "Projets vérifiés et suivis",
          "Possibilités de partenariat stratégique",
          "Plateforme de scouting pour startups"
        ]
      },
      country: {
        title: "Pour le pays",
        items: [
          "Promotion de l’innovation locale",
          "Renforcement de la digitalisation",
          "Création d’emplois technologiques",
          "Contribution à l’économie numérique"
        ]
      },
      africa: {
        title: "Pour l’Afrique",
        items: [
          "Interconnexion des talents",
          "Partage des compétences et ressources",
          "Coopération régionale",
          "Création d’un marché technologique africain"
        ]
      }
    },
    sessionFormat: {
      title: "Format des sessions",
      duration: "2 heures",
      schedule: [
        { time: "15 min", activity: "Présentation du projet technologique du jour" },
        { time: "15 min", activity: "Questions / Réponses" },
        { time: "45 min", activity: "Formation technique" },
        { time: "30 min", activity: "Marketing et partenaires" },
        { time: "15 min", activity: "Session d’échange communautaire" }
      ]
    },
    challenges: {
      title: "Limites actuelles",
      items: [
        "Faible accès au financement",
        "Infrastructures numériques limitées",
        "Connexion internet instable",
        "Faible visibilité des jeunes talents",
        "Manque de confiance des investisseurs"
      ],
      conclusion: "Nous faisons face à ces contraintes avec responsabilité, innovation et détermination."
    },
    sponsors: {
      title: "Nos Sponsors",
      description: "Nous collaborons avec des entreprises locales, internationales et institutions pour soutenir les participants et offrir une exposition commerciale équitable.",
      benefits: [
        "D’une visibilité ciblée",
        "D’une présentation de ses services",
        "D’un accès à une audience active",
        "D’un engagement direct avec des talents"
      ]
    },
    community: {
      title: "Rejoindre la communauté",
      description: "Digital Tech Night Event est ouvert à toute personne motivée par la technologie.",
      members: [
        "Étudiants",
        "Développeurs",
        "Designers",
        "Entrepreneurs",
        "Chercheurs",
        "Organismes et entreprises"
      ],
      quote: "Nous croyons que l’avenir numérique se construit ensemble, pas seul."
    }
  },
  
  // yGO Travel Agency
  travelAgency: {
    title: "yGO Travel Agency",
    tagline: "Nous vous accompagnons pour tous vos besoins de voyage.",
    description: "yGO Travel Agency est la branche voyage de yGO S.A. Spécialisée dans l'organisation de voyages professionnels et touristiques, elle opère en parallèle de yGO Digital pour offrir une gamme complète de services à nos clients.",
    services: [
      { icon: "✈️", title: "Réservation et vente de billets d'avion" },
      { icon: "🏨", title: "Réservations d'hôtels" },
      { icon: "🛂", title: "Assistance Visa" },
      { icon: "🛡️", title: "Assurance voyage" },
      { icon: "🗺️", title: "Organisation de voyages touristiques" },
      { icon: "📄", title: "Traduction de documents professionnels, académiques et administratifs" },
    ],
    imprimerie: {
      title: "yGO Imprimerie",
      description: "Profitez également de nos services d'imprimerie professionnelle.",
      services: [
        { icon: "⌨️", label: "Saisie" },
        { icon: "🖨️", label: "Impression" },
        { icon: "📠", label: "Scan" },
        { icon: "📋", label: "Photocopie" },
        { icon: "🔷", label: "Plastification" },
        { icon: "📚", label: "Reliure" },
        { icon: "📐", label: "Mise en page" },
        { icon: "🗂️", label: "Numérisation de documents" },
        { icon: "⚙️", label: "Autres services administratifs" },
      ]
    },
    contact: {
      phones: ["+257 69 65 16 69", "+257 72 13 36 66", "+257 69 22 93 06", "+243 974 730 186", "+243 898 855 794"],
      address: "Ku Musenyi Haruguru Y'Isoko"
    }
  },

  // Navigation
  navigation: {
    logo: "yGO",
    links: [
      { name: "Accueil", href: "#home" },
      { name: "yGO Digital", href: "#services" },
      { name: "Hébergement", href: "#hosting" },
      { name: "Plateformes", href: "#platforms" },
      { name: "Digital Tech Night", href: "#digital-tech-night" },
      { name: "yGO Travel", href: "#travel" },
      { name: "Mission", href: "#mission" },
      { name: "Contact", href: "#contact" }
    ]
  },
  // Contact
  contact: {
    email: "info@ygo.bi",
    phone: "+257 69 65 16 69",   // Directeur Exécutif
    phone2: "+257 62 37 09 04",  // Directeur Exécutif
    phoneDRC: "+243 898 855 794", // Directeur Technique
    phoneDRC2: "+257 67 88 17 52", // Directeur Technique
    address: "Musenyi, Commune Mpanda",
    web: "https://ygo.bi/",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
};

export type YgoData = typeof ygoData;

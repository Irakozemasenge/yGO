# yGO S.A — Site Web Officiel

> **Innover, Connecter, Transformer l'Afrique.**

Site web corporatif de **yGO S.A**, société regroupant deux branches complémentaires :
- **yGO Digital** — Transformation numérique, développement de plateformes, IA appliquée
- **yGO Travel Agency** — Réservations de voyages, assistance visa, imprimerie

---

## Technologies

| Outil | Version |
|-------|---------|
| React | 18.3.1 |
| TypeScript | 5.8.3 |
| Vite | 7.0.0 |
| Tailwind CSS | 3.4.17 |
| Framer Motion | 11.x |

Polices : **Playfair Display** (titres) + **Space Grotesk** (corps)

---

## Structure du projet

```
src/
├── App.tsx                        # Composition des sections
├── data.ts                        # Toutes les données centralisées
├── index.css                      # Polices et animations globales
└── components/
    ├── Header.tsx                 # Navigation avec section active
    ├── Footer.tsx                 # Footer avec contacts
    ├── YgoHeroSection.tsx         # Hero — page d'accueil
    ├── YgoServicesSection.tsx     # 7 services digitaux
    ├── YgoHostingSection.tsx      # Domaines, SSL, hébergement
    ├── YgoPlatformsSection.tsx    # Plateformes numériques
    │                                (eBillet.bi, Sania.bi, AfyaClick.bi, kashflow.africa)
    ├── DigitalTechNightSection.tsx # Événement Digital Tech Night
    ├── YgoTravelSection.tsx       # yGO Travel Agency + Imprimerie
    ├── MissionVision.tsx          # Mission et Vision
    ├── YgoValuesSection.tsx       # 6 valeurs fondamentales
    ├── YgoContactSection.tsx      # Contact WhatsApp
    ├── ServiceCard.tsx            # Carte service interactive
    └── ValuesCard.tsx             # Carte valeur
```

---

## Sections du site

| Ordre | Section | Description |
|-------|---------|-------------|
| 1 | Hero | Présentation yGO Digital avec CTA WhatsApp |
| 2 | Services | 7 services digitaux (Développement, IA, Data, etc.) |
| 3 | Hébergement | Domaines, SSL, hébergement web et mobile |
| 4 | Plateformes | eBillet.bi, Sania.bi, AfyaClick.bi, kashflow.africa |
| 5 | Digital Tech Night | Événement communauté tech — groupe WhatsApp |
| 6 | yGO Travel | Travel Agency + yGO Imprimerie |
| 7 | Mission | Mission et Vision de yGO |
| 8 | Valeurs | 6 valeurs fondamentales |
| 9 | Contact | WhatsApp + coordonnées complètes |

---

## Plateformes numériques yGO Digital

| Plateforme | Description |
|-----------|-------------|
| **eBillet.bi** | Billetterie en ligne (avion, concert, match, cinéma...) |
| **Sania.bi** | Assistant IA en santé |
| **AfyaClick.bi** | Services de santé digitaux (3 apps Google Play) |
| **kashflow.africa** | Gateway de paiement, Mobile Money, Burundi Pay |

---

## Contacts

| Rôle | Numéros |
|------|---------|
| Directeur Exécutif | +257 69 65 16 69 / +257 62 37 09 04 |
| Directeur Technique | +243 898 855 794 / +257 67 88 17 52 |
| Adresse | Musenyi, Commune Mpanda |

**WhatsApp principal** : [+257 62 37 09 04](https://wa.me/25762370904)

---

## Démarrage rapide

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # Production dans /dist
```

---

## Modifier le contenu

Tout le contenu (textes, services, plateformes, contacts) est centralisé dans **`src/data.ts`**.  
Aucune modification des composants n'est nécessaire pour changer les textes ou les données.

---

© 2025 yGO S.A — Musenyi, Commune Mpanda, Burundi

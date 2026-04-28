# 🍛 TerrangaFood

Plateforme de commande de plats auprès de restaurants dakarois.

**Projet pédagogique** — Architecture Logicielle 2 — L3 Génie Logiciel — ESTM

## Stack technique

| Module | Stack |
|--------|-------|
| Backend API | Express.js, MongoDB, Mongoose |
| Frontend | Next.js 14 (App Router) |
| Base de données | MongoDB (local ou Atlas) |

## Démarrage rapide

### Prérequis

- Node.js 20 LTS
- MongoDB (local ou compte Atlas)
- Git

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/[votre-pseudo]/terrangafood-[equipe].git
cd terrangafood-[equipe]

# Configurer les variables d'environnement
cp .env.example .env
# Éditez .env avec votre URI MongoDB

# Installer les dépendances API
cd api
npm install

# Installer les dépendances Frontend
cd ../web
npm install
```

### Lancement

```bash
# Terminal 1 — API (port 3001)
cd api
npm run dev

# Terminal 2 — Frontend (port 3000)
cd web
npm run dev
```

### Initialiser les données

```bash
cd api
npm run seed
```

## Fonctionnalités existantes

### Backend API

- ✅ **CRUD Restaurants** : Créer, lire, mettre à jour, supprimer des restaurants
  - `GET /api/restaurants` - Liste triée par note décroissante
  - `GET /api/restaurants/:id` - Détail d'un restaurant
  - `POST /api/restaurants` - Créer un restaurant
  - `PUT /api/restaurants/:id` - Modifier un restaurant
  - `DELETE /api/restaurants/:id` - Supprimer un restaurant

- ✅ **CRUD Plats** : Gestion complète des plats
  - `GET /api/plats` - Liste de tous les plats
  - `GET /api/plats/restaurant/:restaurantId` - Plats d'un restaurant
  - `GET /api/plats/:id` - Détail d'un plat
  - `POST /api/plats` - Créer un plat
  - `PUT /api/plats/:id` - Modifier un plat
  - `DELETE /api/plats/:id` - Supprimer un plat

- ✅ **Validation des données** : Contraintes Mongoose (longueur, énumération, min/max)
- ✅ **Gestion d'erreurs** : Middleware centralisé pour les erreurs
- ✅ **Seeding** : Données initiales (5 restaurants, 26 plats)

### Frontend

- ✅ **Page d'accueil** : Grille de restaurants triés par note
- ✅ **Page de détail restaurant** : Affiche les plats du restaurant sélectionné
- ✅ **Composants réutilisables** :
  - `Header` - En-tête avec logo et navigation
  - `RestaurantCard` - Carte restaurant avec emoji et note
  - `PlatCard` - Carte plat avec prix et catégorie
- ✅ **Intégration API** : Communication via `lib/api.js`
- ✅ **Gestion erreurs** : Affichage des messages d'erreur au frontend

### Configuration

- ✅ **Variables d'environnement** : `.env` pour MongoDB et ports
- ✅ **CORS activé** : Communication cross-origin API/Frontend
- ✅ **Logging HTTP** : Morgan pour debug des requêtes

## Structure du projet

```
terrangafood/
├── api/                    # Backend Express
│   ├── src/
│   │   ├── models/         # Modèles Mongoose
│   │   ├── routes/         # Routes Express
│   │   ├── controllers/    # Logique métier
│   │   ├── middleware/      # Middleware
│   │   ├── seed/           # Données initiales
│   │   └── app.js          # Point d'entrée
│   └── package.json
├── web/                    # Frontend Next.js
│   ├── app/                # Pages (App Router)
│   ├── components/         # Composants réutilisables
│   ├── lib/                # Utilitaires
│   └── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Licence

Projet pédagogique — Usage académique uniquement.

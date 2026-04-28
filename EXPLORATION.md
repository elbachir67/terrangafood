# Rapport d'exploration -- Lab 0

## Équipe : Les Sentinelles

### Architecture Backend (par DB -- Marième Sambe)

- **Nombre de modèles Mongoose** : 2 (Restaurant et Plat)

- **Champs du modèle Restaurant** (9 champs) : nom, cuisine, adresse, telephone, description, note, image, horaires (ouverture + fermeture), estOuvert + timestamps automatiques (createdAt, updatedAt)

- **Champs du modèle Plat** (7 champs) : nom, description, prix, categorie (enum : entrée/plat principal/dessert/boisson/accompagnement), image, disponible, restaurant (ObjectId référence vers Restaurant) + timestamps automatiques
- **Relation** : Plat → Restaurant via `ObjectId ref: 'Restaurant'` (One-to-Many)

- **Nombre de routes** : 11 endpoints au total

- **Endpoints existants** :
  - `GET /api/restaurants` — Liste tous les restaurants
  - `GET /api/restaurants/:id` — Détail d'un restaurant
  - `POST /api/restaurants` — Créer un restaurant
  - `PUT /api/restaurants/:id` — Modifier un restaurant
  - `DELETE /api/restaurants/:id` — Supprimer un restaurant
  - `GET /api/plats` — Liste tous les plats
  - `GET /api/plats/restaurant/:restaurantId` — Plats d'un restaurant donné
  - `GET /api/plats/:id` — Détail d'un plat
  - `POST /api/plats` — Créer un plat
  - `PUT /api/plats/:id` — Modifier un plat
  - `DELETE /api/plats/:id` — Supprimer un plat

- **Pattern utilisé** : MVC (Modèle — Vue — Contrôleur). Flux : Client → Route → Contrôleur → Modèle → MongoDB

- **Logique de la fonction `getAll` (restaurantController.js)** : fonction asynchrone qui appelle `Restaurant.find()` pour récupérer tous les documents de la collection MongoDB, les trie par note décroissante (`.sort({ note: -1 })`) pour afficher les meilleurs restaurants en premier, puis renvoie le résultat en JSON via `res.json(restaurants)`. Les erreurs sont déléguées au middleware global via `next(error)`.

---

### Architecture Frontend (par DF -- Dialika Ndong)

- Nombre de pages : 2
- URLs : `/` (accueil), `/restaurants/[id]` (détail restaurant)
- Composants réutilisables : Header, RestaurantCard, PlatCard
- Méthode d'appel API : fetch (http://localhost:3001/api/) dans lib/api.js
# Rapport d'exploration -- Lab 0

## Équipe : Les Sentinelles

---

### Architecture Backend (par DB -- Marième Sambe)

- **Nombre de modèles Mongoose** : 2 (Restaurant et Plat)

- **Champs du modèle Restaurant** (9 champs) : nom, cuisine, adresse, telephone, description, note, image, horaires (ouverture + fermeture), estOuvert + timestamps automatiques (createdAt, updatedAt)

- **Champs du modèle Plat** (7 champs) : nom, description, prix, categorie (enum : entrée/plat principal/dessert/boisson/accompagnement), image, disponible, restaurant (ObjectId référence vers Restaurant) + timestamps automatiques

- **Relation** : Plat → Restaurant via `ObjectId ref: 'Restaurant'` (One-to-Many)

- **Nombre de routes** : 11 endpoints au total

- **Endpoints existants** :
  - `GET /api/restaurants` — Liste tous les restaurants
  - `GET /api/restaurants/:id` — Détail d'un restaurant
  - `POST /api/restaurants` — Créer un restaurant
  - `PUT /api/restaurants/:id` — Modifier un restaurant
  - `DELETE /api/restaurants/:id` — Supprimer un restaurant
  - `GET /api/plats` — Liste tous les plats
  - `GET /api/plats/restaurant/:restaurantId` — Plats d'un restaurant donné
  - `GET /api/plats/:id` — Détail d'un plat
  - `POST /api/plats` — Créer un plat
  - `PUT /api/plats/:id` — Modifier un plat
  - `DELETE /api/plats/:id` — Supprimer un plat

- **Pattern utilisé** : MVC (Modèle — Vue — Contrôleur). Flux : Client → Route → Contrôleur → Modèle → MongoDB

- **Logique de la fonction `getAll` (restaurantController.js)** : fonction asynchrone qui appelle `Restaurant.find()` pour récupérer tous les documents de la collection MongoDB, les trie par note décroissante (`.sort({ note: -1 })`) pour afficher les meilleurs restaurants en premier, puis renvoie le résultat en JSON via `res.json(restaurants)`. Les erreurs sont déléguées au middleware global via `next(error)`.

---

### Architecture Frontend (par DF -- Dialika Ndong)

- Nombre de pages : 2
- URLs : `/` (accueil), `/restaurants/[id]` (détail restaurant)
- Composants réutilisables : Header, RestaurantCard, PlatCard
- Méthode d'appel API : fetch (http://localhost:3001/api/) dans lib/api.js

---

### Configuration (par DO -- Dieynaba cire Daff)
**Variables d'environnement (`.env.example`) :**

| Variable              | Rôle                        | Exemple                                                    |
|-----------------------|-----------------------------|------------------------------------------------------------|
| `MONGODB_URI`         | Connexion à MongoDB         | `mongodb+srv://user:pass@cluster.mongodb.net/terrangafood` |
| `PORT`                | Port de l'API Express       | `3001`                                                     |
| `NEXT_PUBLIC_API_URL` | URL appelée par le frontend | `http://localhost:3001/api`                                |

> Le fichier `.env.example` sert de modèle. Chaque développeur le copie en `.env` et y met ses propres valeurs (identifiants, mots de passe). Le `.env` n'est jamais commité pour des raisons de sécurité.

---

**Scripts npm définis :**

**API (backend) :**
| Script  | Commande                | Description                               |
|---------|-------------------------|-------------------------------------------|
| `dev`   | `nodemon src/app.js`    | Lance l'API avec rechargement automatique |
| `start` | `node src/app.js`       | Lance l'API en mode production            |
| `seed`  | `node src/seed/seed.js` | Remplit la base avec des données initiales|

**Web (frontend Next.js) :**
| Script      | Commande     | Description                                   |
|-------------|--------------|-----------------------------------------------|
| `dev`       | `next dev`   | Lance le serveur de développement (port 3000) |
| `build`     | `next build` | Construit l'application pour la production    |
| `start`     | `next start` | Lance l'application en production             |
| `lint`      | `next lint`  | Vérifie la qualité du code                    |

---
**Fichiers ignorés par Git (`.gitignore`) :**

| Fichier/Dossier          | Raison de l'ignorance                                  |
|--------------------------|--------------------------------------------------------|
| `node_modules/`          | Trop volumineux, se réinstalle avec `npm install`      |
| `.env`                   | Contient des secrets (mots de passe, clés API)         |
| `.next/`, `dist/`        | Fichiers générés par le build, propres à chaque machine|
| `*.log`                  | Fichiers journaux, inutiles pour les autres développeurs|
| `.DS_Store`, `Thumbs.db` | Fichiers spécifiques au système d'exploitation          |
| `.vscode/`, `.idea/`     | Configurations personnelles d'IDE                       |

> Règle d'or : on ne commit que le code source, jamais les fichiers générés, les dépendances ou les secrets.

---

**Remarques complémentaires :**
- L'API tourne sur le port **3001**, le frontend sur le port **3000**
- Les deux serveurs doivent tourner simultanément pour que l'application fonctionne
- La connexion à MongoDB Atlas a nécessité l'ajout de l'IP `0.0.0.0/0` dans Network Access

---
### Tests fonctionnels (par QA -- Mamadou Mathiam Thiam)

- **Fonctionnalités testées** : affichage de la liste des restaurants, affichage du détail d'un restaurant, affichage des plats liés à un restaurant, test des routes API principales avec navigateur et curl
- **Bugs trouvés** : aucun bug bloquant constaté pendant les tests

---

### Synthèse (par CP -- Thiané Boye)

- **Ce qui fonctionne bien** : l'application démarre correctement, l'API répond, le frontend affiche les restaurants et les détails, le workflow Git collaboratif a été appliqué avec branches, issues, PR et merges
- **Ce qui manque (le 30%)** : finaliser les livrables restants du projet, notamment les extensions prévues pour les prochains labs, la conteneurisation, le déploiement en production et la validation complète du workflow Git.

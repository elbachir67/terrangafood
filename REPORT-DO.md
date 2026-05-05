# Rapport de Travail - DevOps (DO) - Lab 3

## Introduction
En tant que responsable DevOps (DO) pour ce Lab 3, ma mission était d'adapter la configuration de l'application pour son exécution dans des conteneurs isolés et d'orchestrer le déploiement multi-services (API, Frontend, MongoDB) via Docker Compose.

## 1. Adaptation de la Configuration (Étape 9)
L'objectif était de rendre le chargement des variables d'environnement conditionnel. En local, nous utilisons `.env`, mais dans Docker, les variables sont injectées directement dans l'environnement.

### Modification de `api/src/app.js` et `api/src/seed/seed.js`
Nous avons utilisé `path` et `fs` pour vérifier l'existence du fichier `.env` avant de tenter de le charger avec `dotenv`.

```javascript
// Exemple dans api/src/app.js
const path = require('path');
const fs = require('fs');

const envPath = path.resolve(__dirname, '../../.env');
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
}
```

### Correction du Fetch (Server-side vs Client-side)
Dans Next.js (App Router), les composants sont rendus côté serveur par défaut. À l'intérieur du conteneur `web`, `localhost:3001` n'existe pas. Nous avons dû adapter `web/lib/api.js` pour utiliser le nom du service Docker (`api`) sur le serveur, tout en gardant `localhost` pour le navigateur (client-side).

```javascript
// web/lib/api.js
const isServer = typeof window === 'undefined';
const API_URL = isServer 
  ? 'http://api:3001/api' 
  : (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api');
```

## 2. Orchestration avec Docker Compose (Étape 10)
J'ai créé le fichier `docker-compose.yml` à la racine pour définir les trois services essentiels :
- **mongo** : Base de données MongoDB 7 avec volume persistant.
- **api** : API Express construite à partir du `api/Dockerfile`.
- **web** : Frontend Next.js construit à partir du `web/Dockerfile`.

### Fichier `docker-compose.yml`
```yaml
services:
  mongo:
    image: mongo:7
    container_name: terrangafood-mongo
    ports: ["27017:27017"]
    volumes: ["mongo-data:/data/db"]
    restart: unless-stopped

  api:
    build:
      context: ./api
      dockerfile: Dockerfile
    container_name: terrangafood-api
    ports: ["3001:3001"]
    environment:
      - MONGODB_URI=mongodb://mongo:27017/terrangafood
    depends_on: [mongo]

  web:
    build:
      context: ./web
      dockerfile: Dockerfile
      args:
        - NEXT_PUBLIC_API_URL=http://localhost:3001/api
    container_name: terrangafood-web
    ports: ["3000:3000"]
    depends_on: [api]

volumes:
  mongo-data:
```

## 3. Lancement et Vérification (Étape 11 & 12)
- **Lancement** : `docker compose up --build -d`
- **Vérification** : `docker compose ps` (Tous les services sont "Up")
- **Seed** : `docker compose exec api node src/seed/seed.js`
- **Test API** : `http://localhost:3001/api/restaurants` (Réponse JSON OK)
- **Test Frontend** : `http://localhost:3000` (Affichage des restaurants OK)

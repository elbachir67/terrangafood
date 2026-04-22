# Rapport d'exploration -- Lab 0

## Equipe : [our-group]

### Architecture Backend (par DB -- [Prenom])
- Nombre de modeles : 2 (Restaurant, Plat).
- Endpoints existants :
  - GET /api/restaurants
  - GET /api/restaurants/:id
  - POST /api/restaurants
  - PUT /api/restaurants/:id
  - DELETE /api/restaurants/:id
  - GET /api/plats
  - GET /api/plats/:id
  - GET /api/plats/restaurant/:restaurantId
  - POST /api/plats
  - PUT /api/plats/:id
  - DELETE /api/plats/:id
- Pattern utilise : MVC (models, controllers, routes, middleware).

### Architecture Frontend (par DF -- [Prenom])
- Nombre de pages : 2 pages App Router (/, /restaurants/[id]) + 1 layout global.
- Composants reutilisables : Header, RestaurantCard, PlatCard.
- Methode d'appel API : fetch centralise dans web/lib/api.js.

### Configuration (par DO -- [Prenom])
- Variables d'environnement : MONGODB_URI, PORT, NEXT_PUBLIC_API_URL.
- Scripts npm :
  - API : dev, start, seed
  - Web : dev, build, start
- Fichiers ignores par Git : node_modules, .env, .next, dist, build.

### Tests fonctionnels (par QA -- [Prenom])
- Fonctionnalites testees :
  - Chargement de la liste des restaurants sur la page d'accueil.
  - Consultation de la page detail restaurant (/restaurants/[id]).
  - Affichage des plats d'un restaurant via /api/plats/restaurant/:restaurantId.
  - Verification des erreurs frontend si API indisponible.
- Bugs trouves :
  - Aucun bug bloquant observe pendant le Lab 0.
  - Point d'attention : incoherence de wording sur la localisation (Dakar/Saint-Louis) selon les fichiers.

### Synthese (par CP -- [onil])
- Ce qui fonctionne bien :
  - Connexion MongoDB operationnelle.
  - API REST CRUD fonctionnelle sur restaurants et plats.
  - Communication frontend/backend fonctionnelle via NEXT_PUBLIC_API_URL.
  - Workflow Git valide (PR, merge, conflit, resolution).
- Ce qui manque (le 30%) :
  - Authentification/autorisation.
  - Couverture de tests automatises (unitaires/integration/e2e).
  - Validation et sanitization plus strictes sur toutes les entrees.
  - Observabilite (logs structures, monitoring) et securite avancee.
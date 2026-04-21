# Rapport d'exploration -- Lab 0

## Équipe : Code-Chill

### Architecture Backend (par DB)
- Nombre de modèles : 2 (Restaurant, Plat)
- Endpoints existants : GET /api/restaurants, GET /api/restaurants/:id, POST /api/restaurants, PUT /api/restaurants/:id, DELETE /api/restaurants/:id, GET /api/plats, GET /api/plats/restaurant/:restaurantId, GET /api/plats/:id, POST /api/plats, PUT /api/plats/:id, DELETE /api/plats/:id
- Pattern utilisé : MVC

### Architecture Frontend (par DF)
- Nombre de pages : 2
- Composants réutilisables : Header, RestaurantCard, PlatCard
- Méthode d'appel API : fetch dans lib/api.js

### Configuration (par DO)
- Variables d'environnement : MONGODB_URI, PORT, NEXT_PUBLIC_API_URL
- Scripts npm : dev, start, seed
- Fichiers ignorés par Git : node_modules, .env, .next

### Tests fonctionnels (par QA)
- Fonctionnalités testées : affichage restaurants, affichage plats, routes API
- Bugs trouvés : aucun

### Synthèse (par CP)
- Ce qui fonctionne bien : affichage restaurants, navigation, connexion MongoDB
- Ce qui manque (le 30%) : commandes, authentification, recherche, filtres

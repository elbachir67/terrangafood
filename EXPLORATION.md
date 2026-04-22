# Rapport d'exploration -- Lab 0

## Équipe : Code-Chill

### Architecture Backend (par DB -- [ Iveliane])
- Nombre de modèles : 2 (Restaurant, Plat)
- Endpoints existants : 
  * Restaurants : GET /api/restaurants, GET /api/restaurants/:id, POST /api/restaurants, PUT /api/restaurants/:id, DELETE /api/restaurants/:id
  * Plats : GET /api/plats, GET /api/plats/restaurant/:restaurantId, GET /api/plats/:id, POST /api/plats, PUT /api/plats/:id, DELETE /api/plats/:id
- Pattern utilisé : MVC
- Base de données : MongoDB avec Mongoose ODM
- Relations : Un restaurant peut avoir plusieurs plats (relation 1-N)

### Architecture Frontend (par DF -- [ Cabrel])
- Nombre de pages : 2 (page accueil + page détail restaurant dynamique)
- Composants réutilisables : Header, RestaurantCard, PlatCard
- Méthode d'appel API : fetch avec gestion des erreurs dans lib/api.js (4 endpoints : getRestaurants, getRestaurant, getPlats, getPlatsByRestaurant)

### Configuration (par DO -- [ Penda])
- Variables d'environnement : MONGODB_URI, PORT, NEXT_PUBLIC_API_URL
- Scripts npm : dev, start, seed
- Fichiers ignorés par Git : node_modules, .env, .next

### Tests fonctionnels (par QA -- [ Khady ])
- Fonctionnalités testées : Aucun test automatisé implémenté (tests manuels uniquement)
- Outils de test : Non configurés (pas de Jest, Cypress, ou autre framework)
- Bugs trouvés : Non documentés
- Recommandations : Implémenter une suite de tests automatisés pour les endpoints API et les composants frontend

### Synthèse (par CP -- [ Anastasia])
- Ce qui fonctionne bien : affichage restaurants, navigation, connexion MongoDB
- Ce qui manque (le 30%) : commandes, authentification, recherche, filtres

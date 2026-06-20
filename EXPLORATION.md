# Rapport d'exploration -- Lab 0

## Equipe : Les Heros

### Architecture Backend (par DB)
- Nombre de modeles : 2 (Restaurant, Plat)
- Endpoints existants : GET /api/restaurants, GET /api/restaurants/:id, POST /api/restaurants, PUT /api/restaurants/:id, DELETE /api/restaurants/:id, GET /api/plats, GET /api/plats/:id, GET /api/plats/restaurant/:restoId, POST /api/plats, PUT /api/plats/:id, DELETE /api/plats/:id
- Pattern utilise : MVC (Model-View-Controller)

### Architecture Frontend (par DF)
- Nombre de pages : 2 (page d'accueil, page detail restaurant)
- Composants reutilisables : Header, RestaurantCard, PlatCard
- Methode d'appel API : fetch dans lib/api.js avec cache: 'no-store'

### Configuration (par DO)
- Variables d'environnement : MONGODB_URI, PORT
- Scripts npm API : dev (nodemon), start, seed
- Scripts npm Web : dev, build, start
- Fichiers ignores par Git : node_modules, .env, .next

### Tests fonctionnels (par QA)
- Fonctionnalites testees : liste des restaurants, detail restaurant, liste des plats par restaurant
- Bugs trouves : aucun

### Synthese (par CP)
- Ce qui fonctionne bien : affichage restaurants, plats, navigation entre pages
- Ce qui manque (le 30%) : module commandes, page de commande, deploiement

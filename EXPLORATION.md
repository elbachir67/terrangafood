# Rapport d’exploration -- Lab 0

## Équipe : Tec Vibes

### Architecture Backend (par DB -- Ibrahima Tall)
- Nombre de modèles : 2 fichiers de modèles existent (Restaurant.js et Plat.js)
- Endpoints existants :
  - GET /api/restaurants
  - GET /api/restaurants/:id
  - POST /api/restaurants
  - PUT /api/restaurants/:id
  - DELETE /api/restaurants/:id
- Pattern utilisé : MVC

### Architecture Frontend (par DF -- Dial Sene)
- Nombre de pages : 2
  - `/` → app/page.js — Page d'accueil, affiche la liste des restaurants
  - `/restaurants/[id]` → app/restaurants/[id]/page.js — Page de détail avec le menu
- Composants réutilisables : Header.js, RestaurantCard.js, PlatCard.js
- Méthode d'appel API : fetch dans lib/api.js avec 4 fonctions (getRestaurants, getRestaurant, getPlatsByRestaurant, getPlats), cache: 'no-store'

### Configuration (par DO -- [Prénom])
- [À compléter par votre membre DO]

### Tests fonctionnels (par QA -- Boye)
- Fonctionnalités testées :
  - Affichage des restaurants
  - Accès à la page de détail d’un restaurant
  - Affichage des plats
  - Test des routes API avec curl et Postman

- Bugs trouvés :
  - Aucun

### Synthèse (par CP -- Ahmadou Oury Kindi BA)
- Ce qui marche :
  - L’API fonctionne correctement
  - Le frontend affiche les restaurants et les plats
  - La connexion MongoDB fonctionne
  - L’architecture MVC est respectée

- Ce qui manque (le 30%) :
  - Gestion des commandes
  - Suivi des commandes
  - Recherche de restaurants ou plats
# Rapport d ’ exploration -- Lab 0
2
3 ## Équipe : [ code-chill ]
4
5 ### Architecture Backend ( par DB -- [ Iveliane])
- Nombre de modèles : 2 (Restaurant, Plat)
- Endpoints existants : 
  * Restaurants : GET /api/restaurants, GET /api/restaurants/:id, POST /api/restaurants, PUT /api/restaurants/:id, DELETE /api/restaurants/:id
  * Plats : GET /api/plats, GET /api/plats/restaurant/:restaurantId, GET /api/plats/:id, POST /api/plats, PUT /api/plats/:id, DELETE /api/plats/:id
- Pattern utilisé : MVC
- Base de données : MongoDB avec Mongoose ODM
- Relations : Un restaurant peut avoir plusieurs plats (relation 1-N)

14 / 16 2025–2026

Architecture Logicielle 2 – L3 GL Lab 0 – Git & Découverte

10 ### Architecture Frontend ( par DF -- [ Cabrel ])
11 - Nombre de pages : 2 (page accueil + page détail restaurant dynamique)
12 - Composants réutilisables : Header , RestaurantCard , PlatCard
13 - Méthode d'appel API : fetch avec gestion des erreurs dans lib / api . js (4 endpoints : getRestaurants , getRestaurant , getPlats , getPlatsByRestaurant)
14
15 ### Configuration ( par DO -- [ Prénom ])
16 - Variables d ’environnement : MONGODB_URI , PORT
17 - Scripts npm : dev , start , seed
18 - Fichiers ignorés par Git : node_modules , . env , . next
19
20 ### Tests fonctionnels ( par QA -- [ Prénom ])
21 - Fonctionnalités testées : [ liste ]
22 - Bugs trouvés : [ liste ou " aucun "]
23
24 ### Synthèse ( par CP -- [ Anastasia])
25 - Ce qui fonctionne bien : ...
26 - Ce qui manque ( le 30%) : ...
# Contributeurs -- TerrangaFood

## Equipe : TEC VIBES

| Membres                 | Rôle de lab 0           |       Github        |

|Ahmadou oury kindi ba    |  CP                     |ahmadou-oury-kindi   |
|Papa Dial SENE           |  DF                     |dial-sene            |
Architecture Frontend (par DF — [Papa Dial SENE])
Nombre de pages : 2

/ → app/page.js — Page d'accueil, affiche la liste des restaurants
/restaurants/[id] → app/restaurants/[id]/page.js — Page de détail d'un restaurant avec son menu

Composants réutilisables : 3

Header.js — Barre de navigation avec le logo TerrangaFood
RestaurantCard.js — Carte cliquable affichant nom, cuisine, adresse et note d'un restaurant
PlatCard.js — Carte affichant nom, description, prix et disponibilité d'un plat

Méthode d'appel API (lib/api.js) :
Le frontend utilise fetch pour appeler l'API Express. L'URL de base est définie via la variable d'environnement NEXT_PUBLIC_API_URL. 4 fonctions sont exportées : getRestaurants(), getRestaurant(id), getPlatsByRestaurant(id), et getPlats(). Toutes utilisent cache: 'no-store' pour toujours récupérer les données fraîches.

BOYE                      | QA                      | ELCRAFTER04
|Ibrahima Tall            |  DB                     |ibrahima100          |
|magor gueye              | DO                      |mqgor                |

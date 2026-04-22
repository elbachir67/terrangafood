# Rapport d’exploration -- Lab 0

## Équipe : tec_vibes

### Architecture Backend (par DB -- Ibrahima Tall)
- **Nombre de modèles :** 2 fichiers de modèles existent (`Restaurant.js` et `Plat.js`).
  - *Champs de Restaurant :* nom, cuisine, adresse, telephone, description, note, image, horaires (ouverture/fermeture), estOuvert, timestamps.
  - *Champs de Plat :* nom, description, prix, categorie, image, disponible, restaurant (lien vers l'ID du restaurant), timestamps.
- **Endpoints existants (Routes) :** Il y a 5 routes principales dans `restaurants.js` :
  1. `GET /api/restaurants` (Récupérer la liste des restaurants)
  2. `GET /api/restaurants/:id` (Récupérer le détail d'un restaurant spécifique)
  3. `POST /api/restaurants` (Créer un restaurant)
  4. `PUT /api/restaurants/:id` (Mettre à jour un restaurant)
  5. `DELETE /api/restaurants/:id` (Supprimer un restaurant)
- **Pattern utilisé :** MVC (Modèles dans `/models`, Contrôleurs dans `/controllers`, Routes dans `/routes`).
- **Logique de la fonction `getAll` :** 
  Dans `restaurantController.js`, la fonction utilise `Restaurant.find()` pour interroger MongoDB et récupérer tous les restaurants. Ensuite, elle utilise `.sort({ note: -1 })` pour les trier du mieux noté au moins bien noté, avant de renvoyer le résultat final au format JSON via `res.json()`.

### Architecture Frontend (par DF -- [Prénom])
- [À compléter par votre membre DF]

### Configuration (par DO -- [Prénom])
- [À compléter par votre membre DO]

### Tests fonctionnels (par QA -- [Prénom])
- [À compléter par votre membre QA]

### Synthèse (par CP -- [Prénom])
- Ce qui marche : 
1. L'API Express répond correctement : GET /api/restaurants retourne la liste des restaurants (ex. Chez Fatou, Le Lamantin avec leurs champs nom, cuisine, adresse, note), et la page de détail restaurant affiche les plats associés.
2. Le frontend Next.js s'affiche sur http://localhost:3000 : la page d'accueil liste les restaurants et un clic sur un restaurant ouvre sa page de détail avec les plats.
3. La connexion à MongoDB fonctionne (message Connecté à MongoDB avec succès confirmé au démarrage).
4. L'architecture MVC est en place : 2 modèles Mongoose (Restaurant.js, Plat.js), 2 fichiers de routes (restaurants.js, plats.js), 2 contrôleurs (restaurantController.js, platController.js), 1 middleware (errorHandler.js).
5. Le script npm run seed peuple la base avec des données initiales.
6. Les composants frontend sont réutilisables : Header.js, RestaurantCard.js, PlatCard.js.
7. La configuration via .env / .env.example est sécurisée (.env absent du dépôt grâce au .gitignore).

- Ce qui manque (Le 30%): 
1. Les routes de gestion des commandes : aucun modèle, aucune route, aucun contrôleur Commande n'existe dans le projet.
2. Le suivi des statuts de commande (en préparation, en livraison, livrée).
3. La fonctionnalité de recherche de restaurants ou de plats.

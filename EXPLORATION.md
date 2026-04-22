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
- [À compléter par votre membre CP]

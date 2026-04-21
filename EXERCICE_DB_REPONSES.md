# 📊 EXERCICE DB – RÉPONSES

**Date :** 21 Avril 2026  
**Projet :** TerrangaFood  
**Section :** DB Analysis - api/src/

---

## ❓ Question 1 : Combien de modèles Mongoose ? Quels sont leurs champs ?

### ✅ Réponse : **2 modèles**

---

### 📦 Modèle 1 : Restaurant

**Fichier :** `api/src/models/Restaurant.js`

| Champ | Type | Propriétés |
|-------|------|-----------|
| `nom` | String | Obligatoire, max 100 caractères, trimmed |
| `cuisine` | String | Obligatoire, type de cuisine, trimmed |
| `adresse` | String | Obligatoire, trimmed |
| `telephone` | String | Optionnel, trimmed |
| `description` | String | Optionnel, max 500 caractères, trimmed |
| `note` | Number | De 0 à 5, défaut: 0 |
| `image` | String | URL image ou null |
| `horaires.ouverture` | String | Défaut: "08:00" |
| `horaires.fermeture` | String | Défaut: "23:00" |
| `estOuvert` | Boolean | Défaut: true |
| `createdAt` | Date | Timestamp auto (mongoose) |
| `updatedAt` | Date | Timestamp auto (mongoose) |

**Validations :**
- Tous les champs obligatoires doivent être fournis
- Le nom ne peut pas dépasser 100 caractères
- La description est limitée à 500 caractères
- La note est comprise entre 0 et 5

---

### 🍽️ Modèle 2 : Plat

**Fichier :** `api/src/models/Plat.js`

| Champ | Type | Propriétés |
|-------|------|-----------|
| `nom` | String | Obligatoire, max 100 caractères, trimmed |
| `description` | String | Optionnel, max 300 caractères, trimmed |
| `prix` | Number | Obligatoire, minimum 0 |
| `categorie` | String | Enum: **entrée**, **plat principal**, **dessert**, **boisson**, **accompagnement** (défaut: "plat principal") |
| `image` | String | URL image ou null |
| `disponible` | Boolean | Défaut: true |
| `restaurant` | ObjectId | Référence obligatoire au modèle Restaurant (relation) |
| `createdAt` | Date | Timestamp auto (mongoose) |
| `updatedAt` | Date | Timestamp auto (mongoose) |

**Validations :**
- Tous les champs obligatoires doivent être fournis
- Le nom ne peut pas dépasser 100 caractères
- La description est limitée à 300 caractères
- Le prix doit être positif (min: 0)
- La catégorie doit être l'une des valeurs énumérées
- La référence au restaurant est obligatoire

**Relation :** Chaque plat est lié à un Restaurant via l'ID MongoDB

---

## ❓ Question 2 : Combien de routes sont définies ? Listez chaque endpoint

### ✅ Réponse : **11 endpoints (5 + 6)**

---

### 🛣️ Routes Restaurants

**Fichier :** `api/src/routes/restaurants.js`

| Méthode | URL | Fonction | Description |
|---------|-----|----------|-------------|
| **GET** | `/api/restaurants` | `restaurantController.getAll` | Récupère tous les restaurants (triés par note décroissante) |
| **GET** | `/api/restaurants/:id` | `restaurantController.getById` | Récupère un restaurant spécifique par son ID |
| **POST** | `/api/restaurants` | `restaurantController.create` | Crée un nouveau restaurant |
| **PUT** | `/api/restaurants/:id` | `restaurantController.update` | Modifie un restaurant existant |
| **DELETE** | `/api/restaurants/:id` | `restaurantController.delete` | Supprime un restaurant |

---

### 🛣️ Routes Plats

**Fichier :** `api/src/routes/plats.js`

| Méthode | URL | Fonction | Description |
|---------|-----|----------|-------------|
| **GET** | `/api/plats` | `platController.getAll` | Récupère tous les plats |
| **GET** | `/api/plats/restaurant/:restaurantId` | `platController.getByRestaurant` | Récupère tous les plats d'un restaurant spécifique |
| **GET** | `/api/plats/:id` | `platController.getById` | Récupère un plat spécifique par son ID |
| **POST** | `/api/plats` | `platController.create` | Crée un nouveau plat |
| **PUT** | `/api/plats/:id` | `platController.update` | Modifie un plat existant |
| **DELETE** | `/api/plats/:id` | `platController.delete` | Supprime un plat |

---

### 📊 Résumé des routes :
- **Total endpoints :** 11
- **Restaurants :** 5 endpoints (CRUD complet)
- **Plats :** 6 endpoints (CRUD complet + 1 route de filtre par restaurant)
- **Pattern :** RESTful API standard

---

## ❓ Question 3 : Ouvrez un contrôleur : quelle est la logique de la fonction `getAll` ?

### ✅ Réponse : Analyse de `restaurantController.getAll`

**Fichier :** `api/src/controllers/restaurantController.js`

---

### 📝 Code source :

```javascript
exports.getAll = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find().sort({ note: -1 });
    res.json(restaurants);
  } catch (error) {
    next(error);
  }
};
```

---

### 🔍 Explication détaillée :

| Ligne | Code | Explication |
|------|------|------------|
| 1 | `exports.getAll = async (req, res, next) => {` | Fonction asynchrone exportée, reçoit les paramètres Express (requête, réponse, next) |
| 2 | `try {` | Démarrage du bloc de gestion des erreurs |
| 3 | `const restaurants = await Restaurant.find()` | Récupère **TOUS** les documents de la collection "restaurants" en base MongoDB (fin de l'attente avec `await`) |
| 3 | `.sort({ note: -1 })` | Trie les résultats par le champ `note` en ordre **décroissant** (-1 = décroissant, 1 = croissant) |
| 3 | `;` | La requête est exécutée et les résultats sont stockés dans `restaurants` |
| 4 | `res.json(restaurants);` | Envoie les résultats au client en **format JSON** avec le code HTTP 200 (success) |
| 5-7 | `} catch (error) { next(error); }` | Si une erreur se produit, elle est passée au middleware `errorHandler` |

---

### 🎯 Logique simplifiée :

1. **Récupérer** → Cherche tous les restaurants en base de données
2. **Trier** → Les classe par note (meilleurs restaurants en premier)
3. **Répondre** → Envoie la liste au format JSON au client

---

### 💡 Résumé :

**La fonction `getAll` récupère tous les restaurants et les retourne triés par note décroissante (les mieux notés en premier).**

**Pattern :** Fonction asynchrone avec gestion d'erreurs, suit le pattern MVC (Model-View-Controller)

---

## 📋 Informations supplémentaires

### Architecture du projet :
- **Models** (`api/src/models/`) : Schémas MongoDB (Restaurant, Plat)
- **Routes** (`api/src/routes/`) : Définition des endpoints HTTP
- **Controllers** (`api/src/controllers/`) : Logique métier pour chaque endpoint
- **Middleware** (`api/src/middleware/`) : Traitement global (erreurs, CORS, etc.)

### Patterns utilisés :
- **RESTful API** : Endpoints REST standard (GET, POST, PUT, DELETE)
- **MVC** : Séparation Models/Views/Controllers
- **Async/Await** : Gestion asynchrone des promesses
- **Try/Catch** : Gestion des erreurs

---

**Fin de l'exercice DB ✅**

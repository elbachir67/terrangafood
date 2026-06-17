# API TerrangaFood -- Documentation

## Base URL
http://localhost:3001/api

## Restaurants (existant)
| Methode | Endpoint               | Description          |
|---------|------------------------|----------------------|
| GET     | /api/restaurants       | Lister les restos    |
| GET     | /api/restaurants/:id   | Detail d'un resto    |
| POST    | /api/restaurants       | Creer un resto       |
| PUT     | /api/restaurants/:id   | Modifier un resto    |
| DELETE  | /api/restaurants/:id   | Supprimer un resto   |

## Plats (existant)
| Methode | Endpoint                       | Description         |
|---------|--------------------------------|---------------------|
| GET     | /api/plats                     | Lister les plats    |
| GET     | /api/plats/:id                 | Detail d'un plat    |
| GET     | /api/plats/restaurant/:restoId | Plats d'un resto    |
| POST    | /api/plats                     | Creer un plat       |
| PUT     | /api/plats/:id                 | Modifier un plat    |
| DELETE  | /api/plats/:id                 | Supprimer un plat   |

## Commandes (Lab 1 -- NOUVEAU)
| Methode | Endpoint                     | Description              |
|---------|------------------------------|--------------------------|
| POST    | /api/commandes               | Creer une commande       |
| GET     | /api/commandes               | Lister les commandes     |
| GET     | /api/commandes/:id           | Detail d'une commande    |
| PATCH   | /api/commandes/:id/statut    | Changer le statut        |
| DELETE  | /api/commandes/:id           | Supprimer une commande   |

### POST /api/commandes -- Exemple
```json
{
  "client": "Moussa Diop",
  "telephone": "+221 77 123 45 67",
  "adresseLivraison": "Keur Gorgui, Villa 12",
  "restaurant": "ID_RESTAURANT",
  "plats": ["ID_PLAT_1", "ID_PLAT_2"],
  "montantTotal": 4500,
  "commentaire": "Sans piment"
}
```

### PATCH /api/commandes/:id/statut -- Transitions
en attente -> confirmee -> en livraison -> livree
en attente -> annulee
confirmee -> annulee

### Codes HTTP
- 200 : Succes
- 201 : Ressource creee
- 400 : Donnees invalides ou transition interdite
- 404 : Ressource non trouvee
- 500 : Erreur serveur

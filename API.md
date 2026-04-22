# Documentation API -- TerrangaFood

## Base URL
http://localhost:3001/api

---

## Restaurants

| Méthode | Endpoint | Description |
|--------|----------|------------|
| GET | /restaurants | Liste des restaurants |
| GET | /restaurants/:id | Détail |
| POST | /restaurants | Créer |
| PUT | /restaurants/:id | Modifier |
| DELETE | /restaurants/:id | Supprimer |

---

## Plats

| Méthode | Endpoint | Description |
|--------|----------|------------|
| GET | /plats | Liste |
| GET | /plats/:id | Détail |
| GET | /plats/restaurant/:id | Par restaurant |
| POST | /plats | Créer |
| PUT | /plats/:id | Modifier |
| DELETE | /plats/:id | Supprimer |

---

## Commandes

| Méthode | Endpoint | Description |
|--------|----------|------------|
| GET | /commandes | Liste des commandes |
| POST | /commandes | Créer une commande |
| GET | /commandes/:id | Détail |
| PATCH | /commandes/:id/statut | Modifier statut |
| DELETE | /commandes/:id | Supprimer |

---

## Exemple POST /commandes

```json
{
  "client": "Aliou",
  "telephone": "+221771234567",
  "adresseLivraison": "Dakar",
  "restaurant": "ID_RESTO",
  "plats": ["ID1", "ID2"],
  "montantTotal": 3000,
  "commentaire": "Sans piment"
}
```

---

## Exemple réponse GET /commandes

```json
[
  {
    "_id": "123",
    "client": "Aliou",
    "montantTotal": 3000,
    "statut": "en_attente"
  }
]
```

---

## Statuts possibles des commandes

- en_attente
- en_preparation
- en_livraison
- livree

---

## Codes HTTP

- 200 : Succès
- 201 : Créé
- 400 : Erreur
- 404 : Non trouvé
- 500 : Erreur serveur
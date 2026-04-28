\# API TerrangaFood — Documentation



\## Base URL

http://localhost:3001/api



\---



\## 📌 Description

Cette API permet de gérer :

\- les restaurants

\- les plats

\- les commandes des clients



\---



\## 🍽️ Restaurants



| Méthode | Endpoint | Description |

|--------|----------|------------|

| GET | /api/restaurants | Lister tous les restaurants |

| GET | /api/restaurants/:id | Détail d’un restaurant |

| POST | /api/restaurants | Créer un restaurant |

| PUT | /api/restaurants/:id | Modifier un restaurant |

| DELETE | /api/restaurants/:id | Supprimer un restaurant |



\---



\## 🍛 Plats



| Méthode | Endpoint | Description |

|--------|----------|------------|

| GET | /api/plats | Lister tous les plats |

| GET | /api/plats/:id | Détail d’un plat |

| GET | /api/plats/restaurant/:restoId | Lister les plats d’un restaurant |

| POST | /api/plats | Créer un plat |

| PUT | /api/plats/:id | Modifier un plat |

| DELETE | /api/plats/:id | Supprimer un plat |



\---



\## 🛒 Commandes (NOUVEAU)



| Méthode | Endpoint | Description |

|--------|----------|------------|

| POST | /api/commandes | Créer une commande |

| GET | /api/commandes | Lister toutes les commandes |

| GET | /api/commandes/:id | Détail d’une commande |

| PATCH | /api/commandes/:id/statut | Modifier le statut |

| DELETE | /api/commandes/:id | Supprimer une commande |



\---



\## 📦 Exemple : création d’une commande



```json

{

&#x20; "client": "Moussa Diop",

&#x20; "telephone": "+221771234567",

&#x20; "adresseLivraison": "Dakar, Keur Gorgui",

&#x20; "restaurant": "ID\_RESTAURANT",

&#x20; "plats": \["ID\_PLAT1", "ID\_PLAT2"],

&#x20; "montantTotal": 4500,

&#x20; "commentaire": "Sans piment"

}


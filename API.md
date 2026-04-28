API TerrangaFood -- Documentation

2
3 ## Base URL
4 http://localhost:3001/api

5
6 ## Restaurants (existant)
7 | Méthode | Endpoint | Description |
8 |---------|---------------------------|------------------|
9 | GET | /api/restaurants | Lister les restos |
10 | GET | /api/restaurants/:id | Détail d’un resto |
11 | POST | /api/restaurants | Créer un resto |
12 | PUT | /api/restaurants/:id | Modifier un resto |
13 | DELETE | /api/restaurants/:id | Supprimer un resto |

14
15 ## Plats (existant)
16 | Méthode | Endpoint | Description |
17 |---------|-------------------------------------------|-----------------------|
18 | GET | /api/plats | Lister les plats |
19 | GET | /api/plats/:id | Détail d’un plat |
20 | GET | /api/plats/restaurant/:restoId | Plats d’un resto |
21 | POST | /api/plats | Créer un plat |
22 | PUT | /api/plats/:id | Modifier un plat |
23 | DELETE | /api/plats/:id | Supprimer un plat |

24
25 ## Commandes (Lab 1 -- NOUVEAU)
26 | Méthode | Endpoint | Description |
27 |---------|----------------------------------------------|----------------------------|
28 | POST | /api/commandes | Créer une commande |
29 | GET | /api/commandes | Lister les commandes |
30 | GET | /api/commandes/:id | Détail d’une commande |
31 | PATCH | /api/commandes/:id/statut | Changer le statut |
32 | DELETE | /api/commandes/:id | Supprimer une commande |

33
34 ### POST /api/commandes -- Exemple
35 json 36 { 37 "client": "Moussa Diop", 38 "telephone": "+221 77 123 45 67", 39 "adresseLivraison": "Keur Gorgui, Villa 12", 40 "restaurant": "ID_RESTAURANT", 41 "plats": ["ID_PLAT_1", "ID_PLAT_2"], 42 "montantTotal": 4500, 43 "commentaire": "Sans piment" 44 } 45

46
47 ### PATCH /api/commandes/:id/statut -- Transitions
48 en attente → confirmée → en livraison → livrée
49 en attente → annulée
50 confirmée → annulée

51
52 ### Codes HTTP
53 - 200 : Succès
54 - 201 : Ressource créée
55 - 400 : Données invalides ou transition interdite
56 - 404 : Ressource non trouvée
57 - 500 : Erreur serveur
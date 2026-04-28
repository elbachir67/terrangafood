# API TerrangaFood -- Documentation
2
3 ## Base URL
4 http :// localhost :3001/ api
5
6 ## Restaurants ( existant )
7 | M é thode | Endpoint | Description |
8 | - - - - - - - - -| - - - - - - - - - - - - - - - - - - - - - - - -| - - - - - - - - - - - - - - - - - - - - - -|
9 | GET | / api / restaurants | Lister les restos |
10 | GET | / api / restaurants /: id | D é tail d ’ un resto |
11 | POST | / api / restaurants | Cr é er un resto |
12 | PUT | / api / restaurants /: id | Modifier un resto |
13 | DELETE | / api / restaurants /: id | Supprimer un resto |
14
15 ## Plats ( existant )
16 | M é thode | Endpoint | Description |
17 | - - - - - - - - -| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -| - - - - - - - - - - - - - - - - - - - - -|
18 | GET | / api / plats | Lister les plats |
19 | GET | / api / plats /: id | D é tail d ’ un plat |
20 | GET | / api / plats / restaurant /: restoId | Plats d ’ un resto |
21 | POST | / api / plats | Cr é er un plat |
22 | PUT | / api / plats /: id | Modifier un plat |
23 | DELETE | / api / plats /: id | Supprimer un plat |
24
25 ## Commandes ( Lab 1 -- NOUVEAU )
26 | M é thode | Endpoint | Description |
27 | - - - - - - - - -| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -| - - - - - - - - - - - - - - - - - - - - - - - -|
28 | POST | / api / commandes | Cr é er une commande |
29 | GET | / api / commandes | Lister les commandes |
30 | GET | / api / commandes /: id | D é tail d ’ une commande |
31 | PATCH | / api / commandes /: id / statut | Changer le statut |
32 | DELETE | / api / commandes /: id | Supprimer une commande |
33
34 ### POST / api / commandes -- Exemple
35 ‘‘‘ json
36 {
37 " client ": " Moussa Diop " ,
38 " telephone ": "+221 77 123 45 67" ,
39 " adresseLivraison ": " Keur Gorgui , Villa 12" ,
40 " restaurant ": " ID_RESTAURANT " ,
41 " plats ": [" ID_PLAT_1 " , " ID_PLAT_2 "] ,
42 " montantTotal ": 4500 ,
43 " commentaire ": " Sans piment "
44 }
45 ‘‘‘
46
47 ### PATCH / api / commandes /: id / statut -- Transitions
48 en attente → confirm é e → en livraison → livr é e
49 en attente → annul é e
50 confirm é e → annul é e
51
52 ### Codes HTTP
53 - 200 : Succ è s
54 - 201 : Ressource cr é é e
55 - 400 : Donn é es invalides ou transition interdite
56 - 404 : Ressource non trouv é e
57 - 500 : Erreur serveur
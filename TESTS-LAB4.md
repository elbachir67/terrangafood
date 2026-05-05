

# Rapport de tests -- Lab 4 ( Production )
2
3 ## Equipe: [ PKMDK ]
4 ## Testeur : [ khadija] ( QA )
5
6 ## URLs de production
7 - Frontend : https://terrangafood-pkmdk.vercel.app
8 - API : https://terrangafood-api-PKMDK.onrender.com
9 - Atlas : terrangafood-admin:iyi5r4VlmdIcYV4a@terrangafood-pkmdk.gclrbz0.mongodb.net

11 ## R é sultats
12 [ tableau rempli ]
## Notes
15 - Temps de cold start API Render : ~ XX secondes
16 - Bugs trouv é s : [ liste ou " aucun "]



| N°|                             Test                                       | Résultat attendu |
| --| -----------------------------------------------------------------------| -----------------|
| 1 | La page d'accueil affiche les 5 restaurants (depuis Atlas via Render). |       ok               
| 2 | Cliquer sur un restaurant affiche sa page détail avec les plats.       |       ok         |
| 3 | Le bouton « Commander ici » ouvre le formulaire de commande.           |       ok         |
| 4 | Le formulaire affiche les plats du restaurant avec les prix en FCFA.   |       ok         |
| 5 | Sélectionner des plats met à jour le total en temps réel.              |       ok        |
| 6 | Soumettre une commande valide affiche « Commande envoyée avec succès ».|       ok         |
| 7 | La page « Mes commandes » affiche la commande créée avec le bon statut.|       ok         |
| 8 | Le badge de statut affiche la bonne couleur (« en attente » = jaune).  |       ok         |
| 9 | Le nom du restaurant et le montant sont corrects dans la commande.     |       ok         |
| 10 | L'API répond correctement sur ``.../api/restaurants``.                |       ok         |
| 11 | L'API répond correctement sur ``.../api/commandes``.                          ok         |
| 12 | Les données dans Atlas (Browse Collections) correspondent.            |       ok         |


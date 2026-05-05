| N°|                             Test                                       | Résultat attendu |
| --| -----------------------------------------------------------------------| -----------------|
| 1 | La page d'accueil affiche les 5 restaurants (depuis Atlas via Render). |       ✅               
| 2 | Cliquer sur un restaurant affiche sa page détail avec les plats.       |       ✅         |
| 3 | Le bouton « Commander ici » ouvre le formulaire de commande.           |       ✅         |
| 4 | Le formulaire affiche les plats du restaurant avec les prix en FCFA.   |       ✅         |
| 5 | Sélectionner des plats met à jour le total en temps réel.              |       ✅         |
| 6 | Soumettre une commande valide affiche « Commande envoyée avec succès ».|       ✅         |
| 7 | La page « Mes commandes » affiche la commande créée avec le bon statut.|       ✅         |
| 8 | Le badge de statut affiche la bonne couleur (« en attente » = jaune).  |       ✅         |
| 9 | Le nom du restaurant et le montant sont corrects dans la commande.     |       ✅         |
| 10 | L'API répond correctement sur ``.../api/restaurants``.                |       ✅         |
| 11 | L'API répond correctement sur ``.../api/commandes``.                          ✅         |
| 12 | Les données dans Atlas (Browse Collections) correspondent.            |       ✅         |
# Rapport de tests -- Lab 1

## Équipe : Les Sentinelles
## Testeur : Thiané Boye (QA)

| # |          Test                | Résultat | Notes |
|---|------------------------------|----------|---------|
| 1 | POST commande valide           | OK     | 201 Created, la commande est créée avec le statut `en attente`. |
| 2 | POST commande sans client      | OK     | 400 Bad Request, validation correcte avec message sur le nom du client obligatoire. |
| 3 | GET toutes les commandes       | OK     | 200 OK, la liste des commandes est retournée. |
| 4 | GET commande par ID            | OK     | 200 OK, la commande demandée est affichée correctement. |
| 5 | GET commande ID inexistant     | OK     | 400 Bad Request, identifiant MongoDB invalide. |
| 6 | PATCH en attente -> confirmée   | OK     | 200 OK, transition autorisée. |
| 7 | PATCH confirmée -> en livraison | OK     | 200 OK, transition autorisée. |
| 8 | PATCH en livraison -> livrée    | OK     | 200 OK, transition autorisée. |
| 9 | PATCH transition interdite     | OK     | 400 Bad Request, transition refusée comme prévu. |
| 10 | PATCH commande livrée         | OK     | 400 Bad Request, aucune transition autorisée depuis `livrée`. |
| 11 | DELETE commande               | OK     | 200 OK, commande supprimée avec succès. |
| 12 | Populate restaurant visible   | OK     | Le détail de la commande affiche bien les informations du restaurant. |
| 13 | Populate plats visible        | OK     | Le détail de la commande affiche bien les informations des plats. |

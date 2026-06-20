# Rapport de tests -- Lab 1

## Equipe : Les Heros
## Testeur : QA

| # | Test                            | Resultat | Notes   |
|---|----------------------------------|----------|---------|
| 1 | POST commande valide            | OK       | 201 Created |
| 2 | POST commande sans client       | OK       | 400 + messages validation |
| 3 | GET toutes les commandes        | OK       | Tableau JSON |
| 4 | GET commande par ID             | OK       | Populate restaurant + plats |
| 5 | GET commande ID inexistant      | OK       | 404 |
| 6 | PATCH en attente -> confirmee   | OK       | Transition valide |
| 7 | PATCH confirmee -> en livraison | OK       | Transition valide |
| 8 | PATCH en livraison -> livree    | OK       | Transition valide |
| 9 | PATCH transition interdite      | OK       | 400 + message clair |
| 10| PATCH commande livree           | OK       | 400 transitionsAutorisees: [] |
| 11| DELETE commande                  | OK       | Message succes |
| 12| Populate restaurant visible     | OK       | nom + adresse affiches |
| 13| Populate plats visible          | OK       | nom + prix affiches |

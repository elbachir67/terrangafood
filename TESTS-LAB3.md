# Rapport de tests -- Lab 3 (Docker)

## Equipe : Les Heros
## Testeur : QA

### Images Docker
| # | Test                            | OK ? | Notes   |
|---|----------------------------------|------|---------|
| 1 | docker build API reussit        | OK   |         |
| 2 | docker build Frontend reussit   | OK   |         |
| 3 | Image API < 250 Mo              | OK   | Taille: ~180MB |
| 4 | Image Frontend < 500 Mo         | OK   | Taille: ~450MB |

### Docker Compose
| # | Test                            | OK ? | Notes   |
|---|----------------------------------|------|---------|
| 5 | docker compose up --build reussit | OK |         |
| 6 | 3 conteneurs en etat "Up"      | OK   |         |
| 7 | Seed fonctionne dans le conteneur | OK |         |
| 8 | API repond sur localhost:3001   | OK   |         |
| 9 | Frontend repond sur localhost:3000| OK  |         |

### Fonctionnel
| # | Test                            | OK ? | Notes   |
|---|----------------------------------|------|---------|
| 10| Restaurants affiches            | OK   |         |
| 11| Commande creee via formulaire   | OK   |         |
| 12| Commande visible dans mes-cmds  | OK   |         |
| 13| Donnees persistent apres restart| OK   |         |
| 14| docker compose down fonctionne  | OK   |         |
| 15| docker compose down -v vide la DB| OK  |         |

# Rapport de tests -- Lab 3 ( Docker )

## É quipe : [ Nom de guerre ]
## Testeur : [ Pr é nom ] ( QA )

### Images Docker
| # | Test | OK ? | Notes |
| - - -| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -| - - - - - -| - - - - - - - -|
| 1 | docker build API r é ussit | | |
| 2 | docker build Frontend r é ussit | | |
| 3 | Image API < 250 Mo | | Taille :|
| 4 | Image Frontend < 500 Mo | | Taille :|

### Docker Compose
| # | Test | OK ? | Notes |
| - - -| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -| - - - - - -| - - - - - - - -|
| 5 | docker compose up -- build r é ussit | | |
| 6 | 3 conteneurs en é tat " Up " | | |
| 7 | Seed fonctionne dans le conteneur | | |
| 8 | API r é pond sur localhost :3001 | | |
| 9 | Frontend r é pond sur localhost :3000| | |

### Fonctionnel
| # | Test | OK ? | Notes |
| - - -| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -| - - - - - -| - - - - - - - -|
| 10| Restaurants affich é s | | |
| 11| Commande cr é é e via formulaire | | |
| 12| Commande visible dans mes - cmds | | |
| 13| Donn é es persistent apr è s restart | | |
| 14| docker compose down fonctionne | | |
| 15| docker compose down -v vide la DB | | |
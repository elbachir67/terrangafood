# Rapport de tests -- Lab 4 (Production)

## Équipe : code& chill
## Testeur : Khady (QA)

## URLs de production
- Frontend : https://terrangafood-code-chill.vercel.app
- API : https://terrangafood-code-chill.onrender.com
- Atlas : cluster0.xxxxx.mongodb.net

## Résultats
| # | Test | OK ? |
|---|------|------|
| 1 | La page d'accueil affiche les 5 restaurants | ✅ |
| 2 | Cliquer sur un restaurant affiche les plats | ✅ |
| 3 | Le bouton "Commander ici" ouvre le formulaire | ✅ |
| 4 | Le formulaire affiche les plats avec prix en FCFA | ✅ |
| 5 | Sélectionner des plats met à jour le total | ✅ |
| 6 | Soumettre une commande affiche "Commande envoyée" | ✅ |
| 7 | "Mes commandes" affiche la commande créée | ✅ |
| 8 | Le badge de statut affiche la bonne couleur | ✅ |
| 9 | Le nom du restaurant et montant sont corrects | ✅ |
| 10 | API répond sur /api/restaurants | ✅ |
| 11 | API répond sur /api/commandes | ✅ |
| 12 | Données dans Atlas correspondent | ✅ |

## Notes
- Temps de cold start API Render : ~30 secondes
- Bugs trouvés : aucun
# Rapport de tests -- Lab 4 (Production)

## Equipe : Les Heros
## Testeur : QA

## URLs de production
- Frontend : https://terrangafood-les-heros.vercel.app
- API : https://terrangafood-api-les-heros.onrender.com
- Atlas : cluster0.xxxxx.mongodb.net

## Resultats

| # | Test                                                          | OK ? | Notes |
|---|---------------------------------------------------------------|------|-------|
| 1 | La page d'accueil affiche les 5 restaurants                   | OK   |       |
| 2 | Cliquer sur un restaurant affiche sa page detail avec plats   | OK   |       |
| 3 | Le bouton "Commander ici" ouvre le formulaire de commande      | OK   |       |
| 4 | Le formulaire affiche les plats du restaurant avec les prix   | OK   |       |
| 5 | Selectionner des plats met a jour le total en temps reel      | OK   |       |
| 6 | Soumettre une commande valide affiche "Commande envoyee"      | OK   |       |
| 7 | La page "Mes commandes" affiche la commande avec bon statut   | OK   |       |
| 8 | Le badge de statut affiche la bonne couleur                   | OK   |       |
| 9 | Le nom du restaurant et le montant sont corrects              | OK   |       |
| 10| L'API repond sur https://...onrender.com/api/restaurants      | OK   |       |
| 11| L'API repond sur https://...onrender.com/api/commandes        | OK   |       |
| 12| Les donnees dans Atlas correspondent                          | OK   |       |

## Notes
- Temps de cold start API Render : ~30 secondes
- Bugs trouves : aucun

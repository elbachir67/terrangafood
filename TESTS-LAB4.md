# Rapport de tests -- Lab 4 (Production)

## Equipe : tec_vibes
## Testeur : Magor Gueye (QA)

## URLs de production 
- Frontend : https://terrangafood-tec_vibes.vercel.ap
- API : https://terrangafood-api-tec_vibes.onrender.com
- Atlas : cluster0.x.x.x.x.mongodb.net

## Resultat
| # |    Test                                                               | Resultat 
| 1 | La page d'accueil affiche les 5 restaurants                           | OK
| 2 | cliquer sur un restaurant affiche sa page detail avec les plats       | OK
| 3 | Le bouton <<commander ici >> ouvre le formulaire de commande          | OK
| 4 | Le formulaire affiche les plats du restaurant avec les prix en FCFA   | OK
| 5 | Selectionner des plats met a jour le total en temps reel.             | OK
| 6 | Soumettre une commande valide affiche  <<Commande envoyee avec succes>>| OK
| 7 | La page <<Mes commandes>> affiche la commande creer avec le bon statut | OK
| 8 | Le badge de status affiche la bonne couleur (<<en attente >> = jaune)  | OK
| 9 | Le nom du restaurant et le montant sont corrects dans la commande.     | OK
| 10 | L'API repond correctement sur https://...onrender.com/api/restaurants | OK
| 11 | L'API repond correctement sur https://...onrender.com/api/commandes   | OK
| 12 | Les donnees dans Atlas (Brose Collection) correspondent | OK
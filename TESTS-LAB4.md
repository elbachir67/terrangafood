# Rapport de tests -- Lab 4 (Production)

## Équipe : TerrangaFood Les Sentinelles

## Testeur : Dieynaba Sire Daff (QA)

## URLs de production

* Frontend : https://terrangafood-les-sentinelles.vercel.app/ 
* API : https://terrangafood-api-les-sentinelles.onrender.com/
* Atlas : cluster0.2lsxbf3.mongodb.net0

## Résultats

| N° | Test                                   | OK ? | Notes                  |
| -- | -------------------------------------- | ---- | ---------------------- |
| 1  | Page d’accueil affiche les restaurants | OK   | Chargement correct     |
| 2  | Page détail restaurant                 | OK   | Navigation fluide      |
| 3  | Bouton commander                       | OK   | Redirection correcte   |
| 4  | Formulaire affiche plats               | OK   | Prix en FCFA corrects  |
| 5  | Calcul total                           | OK   | Dynamique              |
| 6  | Envoi commande                         | OK   | Message succès affiché |
| 7  | Page mes-commandes                     | OK   | Données visibles       |
| 8  | Badge statut                           | OK   | Couleur correcte       |
| 9  | Infos commande                         | OK   | Données cohérentes     |
| 10 | API restaurants                        | OK   | JSON correct           |
| 11 | API commandes                          | OK   | Données récupérées     |
| 12 | MongoDB Atlas                          | OK   | Données présentes      |

## Notes

* Temps de cold start API Render : ~ 30 à 60 secondes
* Bugs trouvés : Aucun bug bloquant

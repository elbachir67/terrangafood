# Rapport de tests -- Lab 3: DevOps

## Équipe : Les Sentinelles
## Testeur : Dialika NDONG (QA)


## 9.1. Tests des images Docker
| # |  Test                          | OK ? | Notes                   |
|---|--------------------------------|------|-------------------------|
| 1 | docker build API réussit       | ok   |Build terminé sans erreur|
| 2 | docker build Frontend réussit  | ok   |Build terminé sans erreur|
| 3 | Image API < 250 Mo             | ok   | Taille : 180 Mo         |
| 4 | Image Frontend < 500 Mo        | ok   | Taille : 420 Mo         |

## 9.2. Tests Docker Compose
| # |       Test                        | OK ? |                   Notes                                       |
|---|-----------------------------------|------|---------------------------------------------------------------|
| 5 | docker compose up --build réussit | ok   |3 services démarrés sans erreur                                |
| 6 | 3 conteneurs en état "Up"         | ok   |Vérifié avec docker compose ps                                 |
| 7 | Seed fonctionne dans le conteneur | ok   | 5 rest. + 26 plats                                            |
| 8 | API répond sur localhost:3001     | ok   |curl http://localhost:3001/api/restaurants retourne les données|
| 9 | Frontend répond sur localhost:3000| ok   |Page d'accueil chargée sans erreur                             |

## 9.3. Tests fonctionnels
| # |       Test                          | OK ? |                Notes                                          |
|---|-------------------------------------|------|---------------------------------------------------------------|
|10 | Restaurants affichés                | ok   |5 restaurants visibles sur la page d'accueil                   |
|11 | Commande créée via formulaire       | ok   |Commande #id créée avec succès                                 |
|12 | Commande visible dans mes-commandes | ok   |Commande #id affichée avec statut "En attente"                 |
|13 | Données persistent après restart    | ok   |Restaurants toujours présents après docker compose down puis up|
|14 | docker compose down fonctionne      | ok   |3 conteneurs arrêtés (vérifié avec docker compose ps)          |
|15 | docker compose down -v vide la DB   | ok   |DB vide curl http://localhost:3001/api/restaurants retourne [] |


### Test des endpoints API
```bash
curl http://localhost:3001/api/restaurants
curl http://localhost:3001/api/plats
curl http://localhost:3001/api/commandes
```
## 5. Résultats des endpoints API

| Endpoint           | Méthode | Statut HTTP | Résultat                   |
|--------------------|---------|-------------|----------------------------|
| /api/restaurants   | GET     | 200         | 5 restaurants retournés    |
| /api/plats         | GET     | 200         | 26 plats retournés         |
| /api/commandes     | GET     | 200         | Liste des commandes        |
| /api/commandes     | POST    | 201         | Commande créée avec succès |

---

# Rapport de tests -- Lab 3 (Docker)

## Équipe : Tec_Vibes
## Testeur : Papa Dial Sene (QA)

---

### Images Docker

| # | Test | OK ? | Notes |
|---|------|------|-------|
| 1 | docker build API réussit | ✅ | Build terminé sans erreur |
| 2 | docker build Frontend réussit | ✅ | Build terminé sans erreur |
| 3 | Image API < 250 Mo | ✅ | Taille : ~182 Mo |
| 4 | Image Frontend < 500 Mo | ✅ | Taille : ~320 Mo |

---

### Docker Compose

| # | Test | OK ? | Notes |
|---|------|------|-------|
| 5 | docker compose up --build réussit | ✅ | Les 3 services démarrent sans erreur |
| 6 | 3 conteneurs en état "Up" | ✅ | terrangafood-mongo, terrangafood-api, terrangafood-web |
| 7 | Seed fonctionne dans le conteneur | ✅ | 5 restaurants et 27 plats insérés |
| 8 | API répond sur localhost:3001 | ✅ | GET /api/restaurants retourne 200 OK |
| 9 | Frontend répond sur localhost:3000 | ✅ | Page d'accueil accessible dans le navigateur |

---

### Fonctionnel

| # | Test | OK ? | Notes |
|---|------|------|-------|
| 10 | Restaurants affichés sur la page d'accueil | ✅ | Liste des 5 restaurants visible |
| 11 | Commande créée via le formulaire | ✅ | Formulaire soumis avec succès |
| 12 | Commande visible dans "Mes commandes" | ✅ | Commande apparaît après soumission |
| 13 | Données persistent après docker compose down puis up | ✅ | Les restaurants restent présents après redémarrage |
| 14 | docker compose down s'exécute sans erreur | ✅ | Les 3 conteneurs arrêtés proprement |
| 15 | docker compose down -v vide la base de données | ✅ | Le volume mongo-data supprimé, DB vide au relancement |
# Rapport de tests -- Lab 1

## Équipe : [ Code & chill ]
## Testeur : [ Cabrel ] ( QA )

| # | Test | Résultat | Notes |
|---|------|----------|-------|
| 1 | POST commande valide | ✅ PASS | Commande créée avec ID 69ea91647dba177c52d9023b |
| 2 | POST commande sans client | ✅ PASS | Retourne 400 avec message "Le nom du client est obligatoire" |
| 3 | GET toutes les commandes | ✅ PASS | Retourne tableau de commandes avec populate restaurant |
| 4 | GET commande par ID | ✅ PASS | Retourne commande avec restaurant et telephone |
| 5 | GET commande ID inexistant | ✅ PASS | Retourne 404 "Commande non trouvée" |
| 6 | PATCH en attente → confirmée | ✅ PASS | Statut mis à jour vers "confirmée" |
| 7 | PATCH confirmée → en livraison | ✅ PASS | Statut mis à jour vers "en livraison" |
| 8 | PATCH en livraison → livrée | ✅ PASS | Statut mis à jour vers "livrée" |
| 9 | PATCH transition interdite | ✅ PASS | Retourne 400 "Transition impossible" pour en attente → livrée |
| 10| PATCH commande livrée | ✅ PASS | Retourne 400 "Transition impossible" car livrée n'a pas de transitions |
| 11| DELETE commande | ✅ PASS | Retourne "Commande supprimée avec succès" |
| 12| Populate restaurant visible | ✅ PASS | Restaurant affiche nom, adresse et telephone |
| 13| Populate plats visible | ✅ PASS | Plat affiche objet complet avec nom, prix, categorie |

# Rapport de tests -- Lab 2

## Équipe : Les Sentinelles

## Testeur : Marième Sambe (QA)

| #   | Test                               | OK ? | Notes                                         |
| --- | ---------------------------------- | ---- | --------------------------------------------- |
| 1   | Lien "Mes commandes" dans header   | ✔    | Navigation accessible depuis toutes les pages |
| 2   | Bouton "Commander ici" visible     | ✔    | Présent sur la page détail restaurant         |
| 3   | Page /commander/[id] s’affiche     | ✔    | Chargement correct avec ID dynamique          |
| 4   | Plats du restaurant visibles       | ✔    | Données API bien récupérées                   |
| 5   | Sélection plats + total temps réel | ✔    | Calcul dynamique fonctionnel                  |
| 6   | Validation champs obligatoires     | ✔    | Blocage si champs vides                       |
| 7   | Commande envoyée avec succès       | ✔    | Requête POST OK                               |
| 8   | Message succès affiché             | ✔    | Feedback utilisateur visible                  |
| 9   | Formulaire réinitialisé            | ✔    | Reset après soumission                        |
| 10  | Page /mes-commandes s’affiche      | ✔    | Route Next.js fonctionnelle                   |
| 11  | Commandes visibles dans liste      | ✔    | Données persistées API                        |
| 12  | StatutBadge couleur correcte       | ✔    | Mapping statut → couleur OK                   |
| 13  | Nom restaurant affiché             | ✔    | Données relationnelles OK                     |
| 14  | Montant formaté FCFA               | ✔    | Format monétaire correct                      |
| 15  | Date affichée correctement         | ✔    | Format lisible utilisateur                    |

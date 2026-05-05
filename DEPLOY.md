# Guide de déploiement -- TerrangaFood-les_sentinelles

## 1. MongoDB Atlas
- Cluster : terrangafood-les-sentinelles (M0 Free, AWS Paris)
- Utilisateur : terrangafood-admin
- Accès réseau : 0.0.0.0/0
- Base : terrangafood
- Seed : exécuté avec 5 restaurants + 27 plats
- URI de connexion : format `mongodb+srv://.../terrangafood?...`

## 2. Notes de configuration
- Le cluster a été créé depuis MongoDB Atlas.
- Un utilisateur de base de données a été ajouté avec les droits `read and write`.
- L'accès réseau a été ouvert à `0.0.0.0/0` pour permettre la connexion depuis Render.
- Le seed a été lancé depuis le terminal local afin d'insérer les données initiales dans Atlas.
- La vérification dans Data Explorer confirme la présence des collections `restaurants` et `plats`.

## 3. Étapes réalisées
1. Création du cluster MongoDB Atlas.
2. Création de l'utilisateur `terrangafood-admin`.
3. Autorisation de l'accès réseau via `0.0.0.0/0`.
4. Récupération et adaptation de l'URI de connexion.
5. Exécution du seed de production.
6. Vérification des collections dans Atlas.

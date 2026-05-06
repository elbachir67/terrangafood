# Guide de déploiement — TerrangaFood

## 1. MongoDB Atlas

- Cluster : terrangafood-Les-teranga-devs (M0 Free, AWS Paris)
- Utilisateur : terrangafood-admin
- Accès réseau : 0.0.0.0/0
- Base : terrangafood
- Seed exécuté avec succès
- Collections créées :
  - restaurants
  - plats
  - commandes

  ## 2. Render (API Express)

- Service : terrangafood-api
- URL : https://terrangafood-api.onrender.com
- Root Directory : api
- Runtime : Node
- Instance : Free
- Variables :
  - MONGODB_URI (MongoDB Atlas)
  - PORT (3001)
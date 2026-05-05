# Guide de déploiement -- TerrangaFood

## 1. MongoDB Atlas

- Cluster : terrangafood-tecvibes (MO Free, AWS Paris)
- Utilisateur : terrangafood-admin
- Accès réseau : 0.0.0.0/0
- Base : Terrangafood
- Seed : exécuté avec 5 restaurants + 26 plats 

## 2. Render (API Express)
- Service : terrangafood-api-[tec_vibes]
- URL : https://terrangafood-tec-vibes.onrender.com
- Root Directory : api
- Runtime : Node
- Instance : Free
- Variables : MONGODB_URI (Atlas), PORT (3001)
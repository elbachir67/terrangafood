# Guide de déploiement -- TerrangaFood

## 1. MongoDB Atlas
- Cluster : terrangafood-pkmdk (M0 Free, AWS Paris)
- Utilisateur : terrangafood-admin
- Accès réseau : 0.0.0.0/0
- Base : terrangafood
- Seed : exécuté avec 5 restaurants + 27 plats

## 2. Render ( API Express )
2 - Service : terrangafood-api-pkmdk
3 - URL : https://terrangafood-pkmdk.onrender.com
4 - Root Directory : api
5 - Runtime : Node
6 - Instance : Free
7 - Variables : MONGODB_URI ( Atlas ) , PORT (3001)

## 3. Vercel (Frontend Next.js)
- Projet : terrangafood-PKMDK
- URL : https://terrangafood-PKMDK.vercel.app
- Root Directory : web
- Framework : Next.js (auto-détecté)
- Variable : NEXT_PUBLIC_API_URL (URL Render + /api)
- Déploiement continu : activé (push sur main)
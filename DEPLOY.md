# Guide de deploiement -- TerrangaFood

## 1. MongoDB Atlas
- Cluster : terrangafood-les-heros (M0 Free, AWS Paris)
- Utilisateur : terrangafood-admin
- Acces reseau : 0.0.0.0/0
- Base : terrangafood
- Seed : execute avec 5 restaurants + 27 plats

## 2. Render (API Express)
- Service : terrangafood-api-les-heros
- URL : https://terrangafood-api-les-heros.onrender.com
- Root Directory : api
- Runtime : Node
- Instance : Free
- Variables : MONGODB_URI (Atlas), PORT (3001)

## 3. Vercel (Frontend Next.js)
- Projet : terrangafood-les-heros
- URL : https://terrangafood-les-heros.vercel.app
- Root Directory : web
- Framework : Next.js (auto-detecte)
- Variable : NEXT_PUBLIC_API_URL (URL Render + /api)
- Deploiement continu : active (push sur main)

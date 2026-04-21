# 🍛 TerrangaFood

Plateforme de commande de plats auprès de restaurants dakarois.

**Projet pédagogique** — Architecture Logicielle 2 — L3 Génie Logiciel — UCAD / ESP

## Stack technique

| Module | Stack |
|--------|-------|
| Backend API | Express.js, MongoDB, Mongoose |
| Frontend | Next.js 14 (App Router) |
| Base de données | MongoDB (local ou Atlas) |

## Démarrage rapide

### Prérequis

- Node.js 20 LTS
- MongoDB (local ou compte Atlas)
- Git

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/[votre-pseudo]/terrangafood-[equipe].git
cd terrangafood-[equipe]

# Configurer les variables d'environnement
cp .env.example .env
# Éditez .env avec votre URI MongoDB

# Installer les dépendances API
cd api
npm install

# Installer les dépendances Frontend
cd ../web
npm install
```

### Lancement

```bash
# Terminal 1 — API (port 3001)
cd api
npm run dev

# Terminal 2 — Frontend (port 3000)
cd web
npm run dev
```

### Initialiser les données

```bash
cd api
npm run seed
```

## Structure du projet

```
terrangafood/
├── api/                    # Backend Express
│   ├── src/
│   │   ├── models/         # Modèles Mongoose
│   │   ├── routes/         # Routes Express
│   │   ├── controllers/    # Logique métier
│   │   ├── middleware/      # Middleware
│   │   ├── seed/           # Données initiales
│   │   └── app.js          # Point d'entrée
│   └── package.json
├── web/                    # Frontend Next.js
│   ├── app/                # Pages (App Router)
│   ├── components/         # Composants réutilisables
│   ├── lib/                # Utilitaires
│   └── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Licence

Projet pédagogique — Usage académique uniquement.

## Fonctionnalités existantes

- Affichage des restaurants
- Détail des restaurants
- Affichage des plats



Le fichier .env.example  
Ce fichier contient la “carte d’idente” technique de notre projet, permettant a l’application de savoir ou se trouve la base de donnees et sur quel port elle doit communiquer. 

Les variables necessaire a configurer dans notre fichiers sont : 

MONGODB_URI : l’adresse de connexion a notre base de donnees MongoDB, qu’elle soit local ou hebergee sur MongoDB Atlas. 

PORT : Le numero du port reseau sur lequel le serveur de l’API Express va s’executer. 

NEXT_PUBLIC_API_URL : L’url complete de l’API utilisee par le frontend pour communiquer avec le backend. 


Le fichier de configuration .gitignore 
Ce fichier contient les Dependances (node_modules/) ,les variables d’environnement(.env) , les fichiers de BUILD (.next/ , out/, ...) , les Logs (.log) et les fichiers systemes et IDE ( .DS_Stores, .vscode/). 

Il existe trois raisons principales pour ignorer ces elements : 

La securite : Ignorer le fichier .env est crucial. S'il était envoyé sur un serveur public (comme GitHub), n'importe qui pourrait voler vos accès à la base de données MongoDB. 

Le Poids : Le dossier node_modules/ peut contenir des milliers de fichiers et peser plusieurs centaines de Mo. 

La Proprete : Les fichiers de "Build" et les "Logs" changent à chaque fois que nous  lancons l'application. 

Le fichier de configuration package.json 

les fichiers package.json l'un contient uniquement des suivant :
-->dotenv 
-->mongodb
et pour l'autre package.json contient trois scrips pour gérer le lancement de mon application:
--> "dev" : "nodemon src/app.js"
--> "start" : "node src/app.js"
--> "seed" : "node -r dotenv/config src/seed/seed.js"

# === Dockerfile Frontend TerrangaFood ===

# Image de base
FROM node:20-alpine

# Répertoire de travail
WORKDIR /app

# Copier les dépendances
COPY package.json package-lock.json* ./

# Installer les dépendances
RUN npm install

# Copier le code source
COPY . .

# Construire l'application
RUN npm run build

# Documenter le port
EXPOSE 3000

# Lancer en mode production
CMD ["npm", "start"]

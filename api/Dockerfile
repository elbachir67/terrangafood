# === Dockerfile API TerrangaFood ===

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

# Documenter le port
EXPOSE 3001

# Lancer en mode production
CMD ["npm", "start"]

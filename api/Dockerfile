# === Dockerfile API TerrangaFood ===

# Image de base
FROM node:20-alpine

# Répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json package-lock.json* ./

# Installer les dépendances
RUN npm install --production

# Copier le code source
COPY . .

# Documenter le port
EXPOSE 3001

# Commande de démarrage
CMD ["node", "src/app.js"]

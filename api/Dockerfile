# === Dockerfile API TerrangaFood ===

# Etape 1 : Image de base
FROM node:20-alpine

# Etape 2 : Repertoire de travail
WORKDIR /app

# Etape 3 : Copier les fichiers de dependances
COPY package.json package-lock.json* ./

# Etape 4 : Installer les dependances
RUN npm install --production

# Etape 5 : Copier le code source
COPY . .

# Etape 6 : Documenter le port
EXPOSE 3001

# Etape 7 : Commande de demarrage
CMD ["node", "src/app.js"]
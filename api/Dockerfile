# === Dockerfile API TerrangaFood ===
 # É tape 1 : Image de base
FROM node:20-alpine
# É tape 2 : R é pertoire de travail
WORKDIR /app
# É tape 3 : Copier les fichiers de d é pendances
# ( on copie d ' abord package*.json pour profiter
# du cache Docker lors du npm install )
COPY package*.json ./
# É tape 4 : Installer les d é pendances
RUN npm install --production

# É tape 5 : Copier le code source
COPY . . 
# É tape 6 : Documenter le port
EXPOSE 3001

# É tape 7 : Commande de d é marrage
CMD ["node", "src/app.js"]
/**
 * @file app.js
 * @description Point d'entrée principal du serveur backend TerrangaFood.
 * Ce fichier configure l'application Express, établit la connexion à MongoDB Atlas,
 * définit les middlewares globaux (CORS, JSON, Error Handling) et centralise
 * les routes de l'API.
 */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config({ path: '../.env' });

// Importation des routes
const restaurantRoutes = require('./routes/restaurants');
const platRoutes = require('./routes/plats');
const commandeRoutes = require('./routes/commandes'); // Ajout pour le module Commandes
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3001;

// --- Middlewares globaux ---
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// --- Routes ---

// Route racine (Accueil de l'API)
app.get('/api', (req, res) => {
  res.json({
    message: 'Bienvenue sur l\'API TerrangaFood 🍛',
    version: '0.1.0',
    endpoints: {
      restaurants: '/api/restaurants',
      plats: '/api/plats',
      commandes: '/api/commandes' // Maintenant visible ici
    }
  });
});

// Branchement des modules
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/plats', platRoutes);
app.use('/api/commandes', commandeRoutes); // Branchement effectif des routes commandes

// --- Gestion des erreurs (doit être après les routes) ---
app.use(errorHandler);

// --- Connexion MongoDB et démarrage ---
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Connecté à MongoDB avec succès');
    app.listen(PORT, () => {
      console.log(`🚀 Serveur démarré sur le port ${PORT}`);
      console.log(`📍 http://localhost:${PORT}/api`);
    });
  })
  .catch((err) => {
    console.error('❌ Erreur de connexion à MongoDB :', err.message);
    process.exit(1);
  });

module.exports = app;
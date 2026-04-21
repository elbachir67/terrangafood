/**
 * ============================================
 * FICHIER PRINCIPAL DE L'API
 * ============================================
 * 
 * Rôle : Configuration et initialisation du serveur Express
 * 
 * Ce fichier est responsable de :
 * - Configurer le serveur Express et ses middlewares (CORS, JSON, logging)
 * - Établir la connexion à la base de données MongoDB
 * - Enregistrer toutes les routes de l'API (/api/restaurants, /api/plats)
 * - Gérer les erreurs globales via un middleware dédié
 * - Démarrer le serveur sur le port défini dans les variables d'environnement
 * 
 * Structure :
 *   - Imports des dépendances et du code métier
 *   - Configuration des middlewares globaux
 *   - Déclaration des routes
 *   - Configuration du traitement des erreurs
 *   - Connexion DB et lancement du serveur
 */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

const restaurantRoutes = require('./routes/restaurants');
const platRoutes = require('./routes/plats');
const errorHandler = require('./middleware/errorHandler');

// Charger les variables d'environnement
dotenv.config({ path: '../.env' });

const app = express();
const PORT = process.env.PORT || 3001;

// --- Middleware globaux ---
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// --- Routes ---
app.get('/', (req, res) => {
  res.json({
    message: 'Bienvenue sur l\'API TerrangaFood 🍛',
    version: '0.0.0',
    endpoints: {
      restaurants: '/api/restaurants',
      plats: '/api/plats'
    }
  });
});

app.use('/api/restaurants', restaurantRoutes);
app.use('/api/plats', platRoutes);

// --- Gestion des erreurs ---
app.use(errorHandler);

// --- Connexion MongoDB et démarrage ---
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Connecté à MongoDB avec succès');
    app.listen(PORT, () => {
      console.log(`🚀 Serveur démarré sur le port ${PORT}`);
      console.log(`📍 http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Erreur de connexion à MongoDB :', err.message);
    process.exit(1);
  });

module.exports = app;

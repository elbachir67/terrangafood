/**
 * ============================================================================
 * app.js — Point d'entrée de l'API TerrangaFood
 * ============================================================================
 * Ce fichier initialise le serveur Express et configure :
 *   - les middlewares globaux (CORS, parsing JSON, logs Morgan)
 *   - la connexion à MongoDB via Mongoose
 *   - les routes principales (/api/restaurants, /api/plats, /api/commandes)
 *   - la gestion centralisée des erreurs
 *
 * Architecture : MVC (Modèles Mongoose → Routes Express → Contrôleurs)
 * Port par défaut : 3001
 *
 * @author Marième Sambe (rôle DB - Lab 0)
 * ============================================================================
 */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

const restaurantRoutes = require('./routes/restaurants');
const platRoutes = require('./routes/plats');
const commandeRoutes = require('./routes/commandes');
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
    version: '0.1.0',
    endpoints: {
      restaurants: '/api/restaurants',
      plats: '/api/plats',
      commandes: '/api/commandes'
    }
  });
});

app.use('/api/restaurants', restaurantRoutes);
app.use('/api/plats', platRoutes);
app.use('/api/commandes', commandeRoutes);

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
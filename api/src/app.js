const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

// Charger les variables d'environnement
require('dotenv').config();

const restaurantRoutes = require('./routes/restaurants');
const platRoutes = require('./routes/plats');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3001;

// --- Middleware globaux ---
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// --- Route test ---
app.get('/', (req, res) => {
  res.json({
    message: "Bienvenue sur l'API TerrangaFood 🍛",
    version: '0.0.0',
    endpoints: {
      restaurants: '/api/restaurants',
      plats: '/api/plats'
    }
  });
});

// --- Routes API ---
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/plats', platRoutes);

// --- Gestion des erreurs ---
app.use(errorHandler);

// --- Debug (à enlever après test) ---
console.log('🔗 URI MongoDB utilisée :', process.env.MONGODB_URI);

// --- Connexion MongoDB + lancement serveur ---
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
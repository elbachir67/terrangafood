const express = require('express');
const router = express.Router();
const commandeController = require('../controllers/commandeController');

// POST → créer une commande
router.post('/', commandeController.create);

// GET → toutes les commandes
router.get('/', commandeController.getAll);

// GET → une commande par ID
router.get('/:id', commandeController.getById);

// PATCH → changer statut
router.patch('/:id/statut', commandeController.updateStatut);

// DELETE → supprimer
router.delete('/:id', commandeController.delete);

module.exports = router;
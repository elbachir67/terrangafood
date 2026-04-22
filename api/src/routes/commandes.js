const express = require('express');
const router = express.Router();
const commandeController = require('../controllers/commandeController');

router.post('/', commandeController.create);

router.get('/', commandeController.getAll);

router.get('/:id', commandeController.getAll);

router.patch('/:id/statut', commandeController.updateStatut);

router.delete('/:id', commandeController.delete);
module.express = router;
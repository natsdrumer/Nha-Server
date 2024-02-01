// routes/medicoRoutes.js
const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');

router.get('/', medicoController.getAll);
router.get('/:id', medicoController.getById);
router.post('/', medicoController.create);
router.put('/:id', medicoController.update);
router.delete('/:id', medicoController.delete);

module.exports = router;

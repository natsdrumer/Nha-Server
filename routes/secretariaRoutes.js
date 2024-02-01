const express = require('express');
const router = express.Router();
const secretariaController = require('../controllers/secretariaController');

router.get('/', secretariaController.getAll);
router.get('/:id', secretariaController.getById);
router.post('/', secretariaController.create);
router.put('/:id', secretariaController.update);
router.delete('/:id', secretariaController.delete);

module.exports = router;
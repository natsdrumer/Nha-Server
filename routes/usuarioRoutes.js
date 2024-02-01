// routes/usuarioRoutes.js
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rota para criar um usuário
router.post('/', usuarioController.createUsuario);

module.exports = router;

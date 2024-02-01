// controllers/usuarioController.js
const { Usuario } = require('../models');

const usuarioController = {
  createUsuario: async (req, res) => {
    try {
      const { nome, email, senha, tipoUsuario } = req.body;

      // Verifique se o e-mail já está em uso
      const usuarioExistente = await Usuario.findOne({ where: { email } });
      if (usuarioExistente) {
        return res.status(400).json({ error: 'E-mail já está em uso.' });
      }

      // Crie o usuário
      const usuario = await Usuario.create({ nome, email, senha, tipoUsuario });

      res.status(201).json(usuario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno do servidor.' });
    }
  },
};

module.exports = usuarioController;

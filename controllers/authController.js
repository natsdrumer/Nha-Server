// controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Usuario } = require('../models');

const generateJWTToken = (user) => {
  const payload = {
    userId: user.id,
    userType: user.tipo, // Assumindo que o campo do tipo de usuário é chamado 'tipo'
  };

  return jwt.sign(payload, 'seuSegredoDoJWT', { expiresIn: '1h' });
};

const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (!senhaCorreta) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    const token = generateJWTToken(usuario);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

module.exports = { login };

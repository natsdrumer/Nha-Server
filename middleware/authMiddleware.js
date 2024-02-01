// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (allowedUserTypes) => {
  return (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: 'Token não fornecido' });
    }

    jwt.verify(token, 'seuSegredoDoJWT', (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Token inválido' });
      }

      const { userType } = decoded;

      if (!allowedUserTypes.includes(userType)) {
        return res.status(403).json({ error: 'Acesso não autorizado' });
      }

      // Adiciona as informações do usuário decodificado ao objeto de solicitação para uso posterior nas rotas
      req.user = decoded;
      next();
    });
  };
};

module.exports = authMiddleware;

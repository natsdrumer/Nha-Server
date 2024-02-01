'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.belongsTo(models.Paciente);
      Usuario.belongsTo(models.Medico);
      Usuario.belongsTo(models.Secretaria);
    }
  }
  Usuario.init({
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });

  Usuario.beforeCreate(async (usuario) => {
    await usuario.hashSenha();
  });

  return Usuario;
};
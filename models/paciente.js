'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Paciente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Paciente.hasMany(models.Consulta);
      Paciente.belongsTo(models.Usuario, { foreignKey: 'UsuarioId' });
    }
  }
  Paciente.init({
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    telefone: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    morada: DataTypes.STRING,
    nif: DataTypes.INTEGER,
    inps: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Paciente',
  });
  return Paciente;
};
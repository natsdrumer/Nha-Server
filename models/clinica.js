'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clinica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Clinica.hasMany(models.Consulta);
      Clinica.hasMany(models.Medico);
      Clinica.hasMany(models.Secretaria);
      Clinica.hasMany(models.Agenda);
      Clinica.belongsToMany(models.Especialidade, { through: 'ClinicaEspecialidade' });
    }
  }
  Clinica.init({
    nome: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    nif: DataTypes.INTEGER,
    telefone: DataTypes.INTEGER,
    especialidadeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Clinica',
  });
  return Clinica;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Medico.hasMany(models.Consulta);
      Medico.belongsToMany(models.Especialidade, { through: 'MedicoEspecialidade' });
      Medico.belongsTo(models.Clinica);
      Medico.belongsToMany(models.Agenda, { through: 'MedicoAgenda' });
      Medico.belongsTo(models.Usuario);
      
    }
  }
  Medico.init({
    nome: DataTypes.STRING,
    telefone: DataTypes.INTEGER,
    nif: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    numeroMedico: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      allowNull: false,
      unique: true,
    }
  }, {
    sequelize,
    modelName: 'Medico',
  });
  return Medico;
};
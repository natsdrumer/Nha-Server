'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agenda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Agenda.belongsTo(models.Medico);
      Agenda.belongsTo(models.Clinica);
      Agenda.hasMany(models.Consulta);
    }
  }
  Agenda.init({
    data: DataTypes.DATE,
    horarioInicio: DataTypes.TIME,
    horarioFim: DataTypes.TIME,
    MedicoId: DataTypes.INTEGER,
    ClinicaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Agenda',
  });
  return Agenda;
};
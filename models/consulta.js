'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Consulta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Consulta.belongsTo(models.Medico);
      Consulta.belongsTo(models.Paciente);
      Consulta.belongsTo(models.Especialidade);
      Consulta.belongsTo(models.Clinica);
    }
  }
  Consulta.init({
    dataHora: DataTypes.DATE,
    preco: DataTypes.DECIMAL,
    MedicoId: DataTypes.INTEGER,
    PacienteId: DataTypes.INTEGER,
    EspecialidadeId: DataTypes.INTEGER,
    ClinicaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Consulta',
  });
  return Consulta;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Especialidade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Especialidade.belongsToMany(models.Medico, { through: 'MedicoEspecialidade' });
    }
  }
  Especialidade.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Especialidade',
  });
  return Especialidade;
};
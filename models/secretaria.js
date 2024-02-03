'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Secretaria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Secretaria.belongsTo(models.Clinica);
      Secretaria.belongsTo(models.Usuario);
    }
  }
  Secretaria.init({
    ClinicaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Secretaria',
  });
  return Secretaria;
};
'use strict';
const bcrypt = require('bcrypt');
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

    async hashSenha() {
      const saltRounds = 10;
      this.senha = await bcrypt.hash(this.senha, saltRounds);
    }

    static associate(models) {
      // define association here
      Usuario.belongsTo(models.Paciente, { foreignKey: 'pacienteId' });
      Usuario.belongsTo(models.Medico, { foreignKey: 'numeroMedico' });
      Usuario.belongsTo(models.Secretaria, { foreignKey: 'secretariaId' });
    }
  }
  Usuario.init({
    nome: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  senha: DataTypes.STRING,
  tipo: {
    type: DataTypes.ENUM('Secretaria', 'Medico', 'Paciente'),
    allowNull: false,
  },
  idade: DataTypes.INTEGER,
  telefone: DataTypes.INTEGER,
  nif: DataTypes.INTEGER,
  morada: DataTypes.STRING,
  inps: DataTypes.INTEGER,
  pacienteId: DataTypes.INTEGER,
  numeroMedico: DataTypes.INTEGER,
  secretariaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
  });

  Usuario.beforeCreate(async (usuario) => {
    await usuario.hashSenha();
  });

  return Usuario;
};
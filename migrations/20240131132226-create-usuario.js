'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      nome: {
        type: Sequelize.STRING
      },
      idade: {
        type: Sequelize.INTEGER
      },
      telefone: {
        type: Sequelize.INTEGER
      },
      morada: {
        type: Sequelize.STRING
      },
      nif: {
        type: Sequelize.INTEGER
      },
      inps: {
        type: Sequelize.INTEGER
      },
      pacienteId: {
        type: Sequelize.INTEGER
      },
      numeroMedico: {
        type: Sequelize.INTEGER
      },
      secretariaId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};
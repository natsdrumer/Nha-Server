'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Consulta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dataHora: {
        type: Sequelize.DATE
      },
      preco: {
        type: Sequelize.DECIMAL
      },
      MedicoId: {
        type: Sequelize.INTEGER
      },
      PacienteId: {
        type: Sequelize.INTEGER
      },
      EspecialidadeId: {
        type: Sequelize.INTEGER
      },
      ClinicaId: {
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
    await queryInterface.dropTable('Consulta');
  }
};
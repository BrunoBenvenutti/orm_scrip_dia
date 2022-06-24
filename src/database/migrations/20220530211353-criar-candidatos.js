'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('candidatos',{
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      can_nome: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      can_apelido: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      can_sexo: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      can_partido: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('candidatos')
  }
  
};

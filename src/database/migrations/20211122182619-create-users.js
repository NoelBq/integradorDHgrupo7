'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      fullname: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      userAddress: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: "emailUNIQUE"
      },
      city: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      image: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      role: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

  let users = [
    {
      fullname: "Martin Lopez",
      userAddress: "Calle 2 1245",
      password: "1234",
      email: "martin@gmail.com",
      city: "Lavalle",
      role: "admin"
    },
    {
      fullname: "Lorena Mont",
      userAddress: "Calle 6 1245",
      password: "1234",
      email: "lore@gmail.com",
      city: "San Martin",
      role: "basic"
    }
  ]
  return await queryInterface.bulkInsert('users',users , {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

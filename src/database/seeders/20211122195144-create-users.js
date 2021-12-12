'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

  let users = [
    {
      fullname: "Julieta",
      userAddress: "Calle 2 567",
      password: "$2a$10$DnKU0YRYBDUgkmswVJuQJe6I.xWcNRdIY7JjbR9oHO0/.l8.yBn7G",
      email: "ju@gmail.com",
      city: "Lavalle",
      role: "admin",
    },
    {
      fullname:"Martin Lopez",
      userAddress: "Calle 34 n 99",
      password: "$2a$10$WhZxdTbK7RB4hNn4CGrJuu2ft4qwrR1sqOmLUSzZjnscVydHeC1OO",
      email: "marti@gmail.com",
      city: "Tandil",
      role: "basic"
    },



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

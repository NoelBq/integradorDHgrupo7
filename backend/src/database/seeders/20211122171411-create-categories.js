'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let categories = [
       {categorieName: 'Donas', categorieDescription: 'Bollo en formar de rosquilla'},
       {categorieName: 'Cookies', categorieDescription: 'Pasta seca en base de harina horneada'},
       {categorieName: 'Helado', categorieDescription: 'Crema Helada en base lactea'},
    ]
    
      return await queryInterface.bulkInsert('categories',categories , {});
    
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


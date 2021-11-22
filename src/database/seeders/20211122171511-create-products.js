'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let products = [
      { 
        productName: 'Dona de Canela',
        stock: true,
        price:120,
        image: '/images/donas/donaCinamon.jpg', 
        description: 'Dona de Canela description',
        categoryId: 1
      },
      { 
        productName: 'Cookie',
        stock: true,
        price:120,
        image: '/images/cookies/darkCookie.jpg', 
        description: 'Cookie description',
        categoryId: 2
      },
      { 
        productName: 'Helado',
        stock: true,
        price: 200,
        image: '/images/helado/pistachioIce.jpg', 
        description: 'Healado de pistachio description',
        categoryId: 3
      }
    ]
    
    return await queryInterface.bulkInsert('products',products , {});
    
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

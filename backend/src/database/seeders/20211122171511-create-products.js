'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let products = [
      { 
        productName: 'Dona de Canela',
        stock: true,
        price:120,
        image: '/images/donaCinamon.jpg', 
        description: 'Dona de Canela',
        categoryId: 1
      },
      { 
        productName: 'Cookie de Chocolate',
        stock: true,
        price:120,
        image: '/images/darkCookie.jpg', 
        description: 'Cookie description',
        categoryId: 2
      },
      { 
        productName: 'Helado',
        stock: true,
        price: 200,
        image: '/images/pistachioIce.jpg', 
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

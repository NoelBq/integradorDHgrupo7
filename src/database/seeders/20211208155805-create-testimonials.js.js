'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let testimonials = [
      {
          id: 1,
          name: "Martina Lopez",
          review: "Todo Genial",
          avatar : "/images/avatars/martina.jpg",

      },
      {
          id: 2,
          name : "Juan Martin",
          review: "Riquisimo",
          avatar : "/images/avatars/juan-martin.jpg"
      },
      {
          id: 3,
          name : "Agustina Juncal",
          review: "Lo mejor",
          avatar : "/images/avatars/agustina.jpg"
      },
      {
          id: 4,
          name : "Julian Kun",
          review: "Buenos productos",
          avatar : "/images/avatars/julian.jpg"
      },
      {
          id: 5,
          name : "Justo Monte",
          review: "Super Rico",
          avatar : "/images/avatars/justo.jpg"
      }
  ]
     return await queryInterface.bulkInsert('testimonials',testimonials , {});
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

const db = require('../database/models');

const Category = {
    getAllCategories: async function () {
        const res = await db.categories.findAll();
       
        return res;
    },
}

console.log(Category.getAllCategories());

module.exports = Category;
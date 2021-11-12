const db = require('../src/database/models');
const pruebaModel = {
    getAll: async function () {
        return db.categories.findAll();
    }
}

module.exports = pruebaModel;
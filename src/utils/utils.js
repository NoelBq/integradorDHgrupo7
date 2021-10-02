const fs = require('fs');
const path = require("path");


const utils = {
    parseJS:  () => {
        return JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/productsDatabase.json'), { encoding: 'utf8', flag: 'r' }));
    }
}

module.exports = utils;
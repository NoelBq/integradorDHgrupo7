const bcryptjs = require("bcryptjs");
const db = require("../database/models");

const userModeldb = {
    createUser: async function(user){
        try { 
            await db.users.create(user) 
        }  catch(error){
            console.log(error)
        }
    },
    getUserByPk: async function (id) {
        const res = await db.users.findByPk(id);
        return res;
    },
    getUserByPkApi: async function (id) {
        const res = await db.users.findByPk(id, {
            attributes: {exclude: ['password']}
        });
        return res;
    },
    
    getAllUsers: async function () {
        const res = await db.users.findAll({
            attributes: {exclude: ['password']}
        });
        return res;
    },

    
    findUserByEmail: async function(email) {
        const res = await db.users.findOne({
            where: {
                email: email
            }
        })
        return res;
        
    },
    
    findMail: async function(email){
        return await db.users.findOne({
            where: {
                email: email
            }
        });
    }
}



module.exports = userModeldb;

const bcryptjs = require("bcryptjs");
const db = require('../database/models')

const userModeldb = {
    createUser: async function(user){
        try { 
            await db.users.create(user) 
        }  catch(error){
            console.log(error)
        }
    },
    
    getAllUsers: async function () {
        const res = await db.users.findAll();
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
        return await db.users.findAll({
            where: {
                email: email
            }
        });
    }
}



module.exports = userModeldb;

const bcryptjs = require("bcryptjs");
const db = require('../database/models')

const userModeldb = {
createUser: async function(body){
    try { 
     await db.users.create({
         fullname: body.fullname,
         userAddress: body.userAddress,
         password: bcryptjs.hashSync(body.password, 10),
         email: body.email,
         city: body.city,
         userCreated: Date.now(),
         role: "basic",
         image: "default"
        })}
        catch(error){
            console.log(error)
        }
    },

    getAllUsers: async function () {
        const res = await db.users.findAll();
        return res;
       
    },
    findUserByEmail: async function(email) {
        const res = await db.user.findOne({
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
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
         createdAt: Date.now(),
         role: "basic",
         image: "default"
        })}
        catch(error){
            console.log(error)
        }
    },
findMail: async function(email){
    return await db.users.findAll({
        where: {
            email: email
        }
    })
}
}

module.exports = userModeldb;
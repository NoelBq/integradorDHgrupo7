const bcryptjs = require("bcryptjs");
const db = require("../database/models");

const userModeldb = {
  getUsers: async function(){
    return await db.users.findAll()
  },
  createUser: async function (body,file) {
    try {
      await db.users.create({
        fullname: body.fullname,
        userAddress: body.userAddress,
        password: bcryptjs.hashSync(body.password, 10),
        email: body.email,
        city: body.city,
        createdAt: Date.now(),
        role: "basic",
        image: file,
      });
    } catch (error) {
      console.log(error);
    }
  },
  findMail: async function (email) {
    return await db.users.findOne({
      where: {
        email: email,
      },
    });
  },
  getPassword: async function (email) {
    try {
      let user = await this.findMail(email);
      return user.password;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = userModeldb;

const bcryptjs = require("bcryptjs");
const db = require("../src/database/models");

const userModeldb = {
  createUser: async function (body) {
    try {
      await db.users.create({
        fullname: body.fullname,
        userAddress: body.userAddress,
        password: bcryptjs.hashSync(body.password, 10),
        email: body.email,
        city: body.city,
        userCreated: Date.now(),
        role: "basic",
        image: "default",
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
  getPassword: async function (email){
    let user = await this.findMail(email)
    return (user.password)

  }
}
module.exports = userModeldb;

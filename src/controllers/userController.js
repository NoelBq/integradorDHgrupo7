
const User = require('../../models/User'); 
const bcryptjs = require('bcryptjs');


const userController = {
    processRegister: (req, res) => {
        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10)
        }
        User.createUser(userToCreate);
        res.status(200).redirect('/')
    }
}

module.exports = userController;


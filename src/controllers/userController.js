
const User = require('../../models/User'); 
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator')


const userController = {
    processRegister: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const validations = errors.array();
            res.render('formregister', { validations: validations })
            console.log(errors)
        } else {
            let userToCreate = {
                ...req.body,
                rol: "basic",
                password: bcryptjs.hashSync(req.body.password, 10)
            }
            User.createUser(userToCreate);
            res.status(200).redirect('/')
        }
    }
}

module.exports = userController;


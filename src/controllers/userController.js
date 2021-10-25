
const User = require('../../models/User'); 
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const e = require('express');


const userController = {

    userProfile: (req, res) => {
        res.render('userprofile')
    },
    processRegister: (req, res) => {
        const errors = validationResult(req);
        let hashedPassword = bcryptjs.hashSync(req.body.password, 10);
        let userInDB = User.findByField('email', req.body.email);
        if (!errors.isEmpty()) {
            const validations = errors.array();
            let filteredValidations = validations.filter(err => err.msg != 'Invalid value')
            const oldData = req.body;
            res.render('formregister', { validations: filteredValidations })
            console.log(errors)
        } 

        if(userInDB) {
            res.render('formregister', {
                errors: 
                {
                    email: {
                        msg: "Usuario ya registrado"
                    }
                },
                oldData: req.body // to keep data previously
            })
        } 

        let userToCreate = {
            ...req.body,
            rol: "basic",
            password: hashedPassword
        }
        User.createUser(userToCreate);
        res.status(200).redirect('login')
    
    },

    loginProcess: (req, res) => {
        let userToLoggin = User.findByField('email', req.body.email)
        if(userToLoggin) {
            let passwordOK = bcryptjs.compareSync(req.body.password, userToLoggin.password);
            if(passwordOK) {
                if(userToLoggin.rol == 'admin') {
                    res.redirect('/adminpanel')
                } else {
                    res.render('userprofile',{ user: userToLoggin})
                }
            }
        } else {
            return res.render('formlogin', {
                errors: 
                    {
                        email: {
                            msg: "Credenciales Invalidas"
                        }
                    },
            })
        }
    }
}

module.exports = userController;


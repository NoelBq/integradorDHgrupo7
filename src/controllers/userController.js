const User = require("../../models/User");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");


const userController = {
    userProfile: (req, res) => {
        res.render('userprofile', {user: req.session.userLoged})  
    },
    processRegister: (req, res) => {
        const errors = validationResult(req);
        let userInDB = User.findByField('email', req.body.email);
        let hashedPassword = bcryptjs.hashSync(req.body.password, 10);
        if (!errors.isEmpty()) {
            const validations = errors.array();
            let filteredValidations = validations.filter(
                (err) => err.msg != "Invalid value"
            );
            const oldData = req.body;
            res.render("formregister", { validations: filteredValidations });
            console.log(errors);
        } 
            if (userInDB) {
                res.status(409).render("formregister", {
                    errors: {
                        email: {
                            msg: "Usuario ya registrado",
                        },
                    },
                    oldData: req.body, // to keep data previously added
                });
            } else {
                let userToCreate = {
                    ...req.body,
                    rol: "basic",
                    password: hashedPassword,
                    image: req.file.filename
                }
                User.createUser(userToCreate);
                res.status(200).redirect("login?registered=1");
            }
    },

    loginProcess: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);
        if(userToLogin) {
            console.log(req.session);
            req.session.userLoged = userToLogin;
            console.log(userToLogin)
            let passwordOK = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(passwordOK) {
                if(userToLogin.rol == 'admin') {
                    res.redirect('/adminpanel')
                } else {
                    res.render('userprofile',{ user: userToLogin})
                }
            } 
        } else {
            return res.render("formlogin", {
                errors: {
                    email: {
                        msg: "Credenciales Invalidas",
                    },
                },
            });
        }
    },
};

module.exports = userController;
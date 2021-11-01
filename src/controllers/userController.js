const User = require("../../models/User");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");


const userController = {
    userProfile: (req, res) => {
        console.log(req.cookies.userEmail);
        res.render('userprofile', {user: req.session.userLogged})  
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
            req.session.userLogged = userToLogin;

            if(req.body.remember) {
                res.cookie('userEmail', req.body.email, {maxAge : (1000 * 60) * 3})
            }

            let passwordOK = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(passwordOK) {
                if(userToLogin.rol == 'admin') {
                    res.redirect('/adminpanel')
                } else {
                    res.redirect('/user/profile')
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
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        console.log(req.session);
        return res.redirect('/');
    }
};

module.exports = userController;
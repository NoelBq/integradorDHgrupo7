const userModel = require("../models/User")
const User = require("../models/User");
const userModeldb = require("../models/userModeldb")
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");


const userController = {
    
    getUsers:  async function(req,res,next){
        try{
            const result = await userModel.getUsers()
             res.status(200).json({data: result ,error: null, succes: true})
        }catch(error){
            res.status(500).json({data: null ,error:error, succes: false})
        }
    },
    userProfile: (req, res) => {
        console.log(req.cookies.userEmail);
        res.render('userprofile', {user: req.session.userLogged})  
    },
    processRegister: async (req, res) => {
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const validations = errors.array();
            let filteredValidations = validations.filter(
                (err) => err.msg != "Invalid value"
            );
            
            res.render("formregister", { validations: filteredValidations });
        
        }else{
            try{
                let resultado = await userModeldb.findUserByEmail(req.body.email);
                console.log(resultado.fullname);

                if(resultado == null){
                    let image = req.file;
                    let password = bcryptjs.hashSync(body.password, 10);
                    let user = {
                        fullname: req.body.fullname,
                        userAddres: req.body.userAddres,    
                        password: password,
                        city: req.body.city,
                        image: image,
                        role: "basic"
                    }
                    userModeldb.createUser(user)
                        .then(res.status(200).redirect("login?registered=1"))
                }else{
                    res.status(409).render("formregister", {
                        errors: {
                            email: {
                                msg: "Ups!! El mail ya esta registrado por otro usuario",
                            },
                        },
                        oldData: req.body, // to keep data previously added
                    });
                }
            }catch(error){
                res.status(500).json({data: null ,error:error, succes: false})
            }
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
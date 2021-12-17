
const fs = require('fs');
const userModeldb = require("../models/userModeldb")
const product = require("../models/Product");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");


const userController = {
    
    getUsers: async (req,res) =>{
        try{
            const result = await userModeldb.getUsers()
            res.status(200).json({data: result ,error: null, succes: true})
        }catch(error){
            res.status(500).json({data: null ,error:error, succes: false})
        }
    },
    userProfile: async (req, res) => {
        try {
            let productsInCart = 0
            let user = req.session.userLogged; 
            if(user) {
              productsInCart = await product.getAmountProductsByUser(user.id)
            }
            console.log(req.cookies.userEmail);
            res.render('userprofile', {user: req.session.userLogged, productsInCart})  
            
        } catch (error) {
            console.log(error);
        }
    },
    processRegister: async (req, res) => {
        let file = req.file;
        console.log(file);
        const hashedPassword = bcryptjs.hashSync(req.body.password, 10);
        const errors = validationResult(req);
        if (file != undefined) {
            image  = `/images/avatars/${req.file.filename}`;
        } else {
            image = "default";
        }
        if (!errors.isEmpty()) {
            const validations = errors.array();
            let filteredValidations = validations.filter(
                (err) => err.msg != "Invalid value"
                );
                const oldData = req.body;
                res.render("formregister", { validations: filteredValidations });
                console.log(errors);
            } else {
                let userDTO = {
                    fullname: req.body.fullname,
                    userAddress: req.body.userAddress,
                    password: hashedPassword,
                    email: req.body.email,
                    city: req.body.city,
                    image: image,
                    role: "basic",
                    createdAt: new Date()
                }
                console.log(userDTO);
                try{
                    let resultado = await userModeldb.findMail(req.body.email);
                    if(resultado.length === 0){
                        try {
                            await userModeldb.createUser(userDTO)
                            res.status(200).redirect("login?registered=1")
                        } catch (error) {
                            console.log(error);
                        }
                    } else {
                        res.status(409).render("formregister", {
                            errors: {
                                email: {
                                    msg: "Ups!! El mail ya esta registrado por otro usuario",
                                },
                            },
                        });
                    }
                }catch(error){
                    res.status(500).json({data: null ,error:error, succes: false})
                }
            }
        },
        loginProcess: async (req, res) => {
            let userToLogin = await userModeldb.findUserByEmail(req.body.email)
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
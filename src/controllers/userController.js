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
            const oldData = req.body;
            res.render("formregister", { validations: filteredValidations });
            console.log(errors);
        }else{
            try{
                let resultado = await userModeldb.findMail(req.body.email);
                console.log(resultado)
                if(resultado == false){
                    userModeldb.createUser(req.body)
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
    loginProcess: async (req, res) => {
        try{
              let userToLogin = await userModeldb.findMail(req.body.email) //me traigo el user
              let userPassword = await userModeldb.getPassword(req.body.email) //me traigo la password hashiada
              let passwordOK = bcryptjs.compareSync(req.body.password, userPassword); //comparo si es la misma que en la db
              if(passwordOK) {
                  if(userToLogin.role == 'admin') {
                      res.redirect('/adminpanel')
                  } else {
                      res.redirect('/')
                  }
              }else {
                  return res.status(409).render("formlogin", {
                      errors: {
                          email: {
                              msg: "Credenciales Invalidas",
                          },
                      },
                  })
              }
              if(userToLogin) { 
                  req.session.userLogged = userToLogin;
                      if(req.body.remember) {
                          res.cookie('userEmail', req.body.email, {maxAge : (1000 * 60) * 3})
                      }
                      
                  }
              
      }catch(error){
          res.status(500).json({data: null ,error:error, succes: false})
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
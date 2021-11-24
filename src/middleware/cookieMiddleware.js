const User = require('../models/userModeldb')


function rememberUser(req, res, next)  {
    let emailCookie = req.cookies.userEmail;
    if(emailCookie != undefined){
        let userFromCookie = User.findMail(emailCookie);
        if(userFromCookie) {
            req.session.userLogged = userFromCookie;}
    }
    next();
}

module.exports = rememberUser;
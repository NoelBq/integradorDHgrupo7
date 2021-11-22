const User = require('../models/User');


function rememberUser(req, res, next)  {
    let emailCookie = req.cookies.userEmail;
    let userFromCookie = User.findByField('email', emailCookie);
    if(userFromCookie) {
        req.session.userLogged = userFromCookie;
    }
    next();
}

module.exports = rememberUser;
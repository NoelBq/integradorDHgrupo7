const userModeldb = require("../models/userModeldb")

async function rememberUser(req, res, next)  {
    let emailCookie = req.cookies.userEmail;
    
    if (emailCookie) {
        try {
            let userFromCookie = await userModeldb.findMail(emailCookie);
            if(userFromCookie) {
                req.session.userLogged = userFromCookie;
            }
        } catch (error) {
            console.log(error);
        }
    }
    next();
}

module.exports = rememberUser;
function adminMiddleware(req, res, next) {
    let user = req.session.userLogged;
    if (user != undefined) {
        if (user.rol == "basic") {
            return res.redirect('/user/profile');
        } 
    } else {
        return res.redirect('/user/login')
    }
    next();
}

module.exports = adminMiddleware;
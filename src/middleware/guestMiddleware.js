function guestMiddleware(req, res, next) {
   let user = req.session.userLogged;
   if(user) {
       if (user.rol == "basic") {
         res.redirect('/user/profile')
       } else {
         return res.redirect('/adminpanel')
       }
   }
   next();
}

module.exports = guestMiddleware;
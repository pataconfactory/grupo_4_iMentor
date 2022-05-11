const User = require('../models/Users');

function userLoggedMidleware(req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByPk('email', emailInCookie);
    

    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
  
    next();
}

module.exports = userLoggedMidleware;
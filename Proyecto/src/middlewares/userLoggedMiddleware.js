const db = require("../../database/models");

function userLoggedMidleware(req, res, next) {
    res.locals.isLogged = false;
    
    /* if(req.cookies.userEmail){
        let emailInCookie = req.cookies.userEmail;
    
        db.User.findOne({
            include: [
                {association: "roles"},
                {association: "users"},
                {association: "bookings_user"},
                {association: "users_products"},
            ],
            where: {
                email: emailInCookie
            }
        })
        .then(function (userFromCookie) {
            if(userFromCookie){
                req.session.userLogged = userFromCookie.dataValues;
            }
        })
    } */

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    
    next();
}

module.exports = userLoggedMidleware;
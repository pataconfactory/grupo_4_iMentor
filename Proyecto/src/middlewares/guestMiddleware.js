function guestMiddleware(req, res, next) {
    if(req.session.userLogged){
        return res.redirect('/users/profile/:userId');
    }
    next();
}

module.exports = guestMiddleware;
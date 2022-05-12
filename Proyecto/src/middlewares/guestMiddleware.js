function guestMiddleware(req, res, next) {
    if(req.session.userLogged && req.session.userLogged.role_id != 2){
        return res.redirect('/users/profile');
    }
    next();
}

module.exports = guestMiddleware;
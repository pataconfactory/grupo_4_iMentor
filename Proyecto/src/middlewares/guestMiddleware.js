function guestMiddleware(req, res, next) {
    if(req.session.userLogged && req.session.userLogged.category !== 'Administrador'){
        return res.redirect('/users/profile');
    }
    next();
}

module.exports = guestMiddleware;
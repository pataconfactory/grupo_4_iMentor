function userLoggedMidleware(req, res, next) {
    res.locals.isLogged = false;

    next();
}

module.exports = userLoggedMidleware;
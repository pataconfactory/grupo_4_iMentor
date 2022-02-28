const path = require('path');

const mainController = {

    index: function (req, res) {
        res.render('index')
    },

    register: function (req, res) {
        res.render('register')
    },

    login: function (req, res) {
        res.render('login')
    },
};

module.exports = mainController;
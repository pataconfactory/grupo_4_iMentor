const path = require('path');

const mainController = {

    index: function (req, res) {
        res.sendFile(path.join(__dirname, "../views/index.html"))
    },

    register: function (req, res) {
        res.sendFile(path.join(__dirname, "../views/register.html"))
    },

    login: function (req, res) {
        res.sendFile(path.join(__dirname, "../views/login.html"))
    },
};

module.exports = mainController;
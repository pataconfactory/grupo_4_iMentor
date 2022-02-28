const path = require('path');

const mainController = {

    index: function (req, res) {
        res.render('index')
    },

    register: function (req, res) {
        res.render(path.join(__dirname, '../views/users/register'))
    },

    login: function (req, res) {
        res.render(path.join(__dirname, '../views/users/login'))
    },
};

module.exports = mainController;
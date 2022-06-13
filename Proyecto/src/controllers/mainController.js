const path = require('path');

const mainController = {

    index: function (req, res) {
        res.render('index')
    },

    paginaConstruccion: function (req, res) {
        res.render('paginaEnConstruccion')
    },

    contact: function (req, res) {
        res.cookie();
        return res.render(path.join(__dirname, '../views/contact'))
    },


 }

module.exports = mainController;
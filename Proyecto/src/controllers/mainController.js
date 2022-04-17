const path = require('path');

const mainController = {

    index: function (req, res) {
        res.render('index')
    },

    paginaConstruccion: function (req, res) {
        res.render('paginaEnConstruccion')
    },
};

module.exports = mainController;
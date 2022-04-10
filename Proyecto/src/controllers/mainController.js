const path = require('path');

const mainController = {

    index: function (req, res) {
        res.render('index')
    },

    teach_en_imentor: function (req, res) {
        res.render('teach-en-imentor')
    },
};

module.exports = mainController;
const path = require('path');

const productsController = {

    productCart: function(req, res) {
        res.render('productCart')
    },

    productDetail: function(req, res) {
        res.render('productDetail')
    },
};

module.exports = productsController;
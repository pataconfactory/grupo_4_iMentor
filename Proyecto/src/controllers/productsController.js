const path = require('path');

const productsController = {

    productCart: function(req, res) {
        res.render(path.join(__dirname, '../views/products/productCart'))
    },

    productDetail: function(req, res) {
        res.render(path.join(__dirname, '../views/products/productDetail'))
    },

    productEdition: function(req, res) {
        res.render(path.join(__dirname, '../views/products/productEdition'))
    },
};

module.exports = productsController;
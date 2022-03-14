const path = require('path');

const productsController = {

    productCart: function(req, res) {
        res.render(path.join(__dirname, '../views/products/productCart'))
    },

    products: function(req, res) {
       res.render(path.join(__dirname, '../views/products/products'))
    },

    create: function(req, res) {
        res.render(path.join(__dirname, '../views/products/productEdition'))
    },

    /*search:*/
};

module.exports = productsController;
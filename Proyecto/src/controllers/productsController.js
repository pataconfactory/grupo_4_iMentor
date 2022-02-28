const path = require('path');

const productsController = {

    productCart: function(req, res) {
        res.render(path.join(__dirname, '../views/products/productCart'))
    },

    productDetail: function(req, res) {
        res.render(path.join(__dirname, '../views/products/productDetail'))
    },
};

module.exports = productsController;
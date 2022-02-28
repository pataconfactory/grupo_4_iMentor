const path = require('path');

const productsController = {

    productCart: function(req, res) {
        res.sendFile(path.join(__dirname, "../views/productCart.html"))
    },

    productDetail: function(req, res) {
        res.sendFile(path.join(__dirname, "../views/productDetail.html"))
    },
};

module.exports = productsController;
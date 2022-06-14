const path = require('path');
const {validationResult} = require('express-validator');
const db = require('../../database/models');
const Op = db.Sequelize.Op;

const productCartController = {
    productCart: function(req, res) {
        let userId = req.session.userLogged.user_id;

        let products = db.Product.findAll({
            include: [
                {association: "mentors"},
                {association: "categories"},
                {association: "users_products"}
            ]
        });

        let bookings = db.Booking.findAll({
            include: [
                {association: "product_booking"},
                {association: "user_booking"},
                {association: "invoices_booking"}
            ], where:{
                user_id: {[Op.like]: userId}
            }
        });
        
        let users = db.User.findAll({
            include: [
                {association: "roles"},
                {association: "users"},
                {association: "users_products"}
            ]
        });
        
        Promise.all([products, bookings, users])
        .then(function([products, bookings, users]) {
            let productsCart = bookings;
            if(productsCart.length == 0){
                return res.render(path.join(__dirname, '../views/products/productCart'), {products})
            } else if(productsCart.length > 0){
                let cifras = {};
                let subTotal = 0;
                for(oneProductsCart of productsCart) {
                    subTotal = subTotal + parseInt(oneProductsCart.price_to_pay);
                }
                cifras.subTotal = subTotal;
                
                let iva = (( subTotal * 21) / 100);
                cifras.iva = iva;

                let total = subTotal + iva;
                cifras.total = total;

                return res.render(path.join(__dirname, '../views/products/productCart'), {products, bookings, users, cifras}) 
            }
        })
    },
    
    productCartAdd: function(req, res) {
        let productId = req.params.id;
        let userId = req.session.userLogged.user_id;

        db.Product.findByPk(productId, {
            include: [
                {association: "mentors"},
                {association: "categories"},
                {association: "users_products"}
            ]
        })
        .then(function(product) { 
            let price = parseInt(product.price);

            db.Booking.create({
                user_id: userId,
                product_id: productId,
                quantity: 1,
                price_to_pay: price
            }).then((product) => {
                return res.redirect('/products/productCart');
            });
        })
        

    },

    productCartDestroy: function(req, res) {
        let bookingId = req.params.id;
        
        db.Booking.destroy({
            where: {
                booking_id: bookingId
            }
        }).then(function(product){
            return res.redirect('/products/productCart');
        })
    },

    productsToPay: function(req, res) {
    }
};

module.exports = productCartController;
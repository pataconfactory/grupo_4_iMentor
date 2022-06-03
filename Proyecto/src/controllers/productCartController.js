const path = require('path');
const {validationResult} = require('express-validator');
const db = require('../../database/models');
const Op = db.Sequelize.Op;

const productCartController = {
    productCart: function(req, res) {
        let userEmail = req.session.userLogged.email;
        db.Product.findAll({
            include: [
                {association: "mentors"},
                {association: "categories"},
                {association: "users_products"}
            ]
        })
        .then(function(products) {
            return res.render(path.join(__dirname, '../views/products/productCart'), {products})
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
        

    }/*,

    productCartDestroy: function(req, res) {
        let idProduct = parseInt(req.params.id);
        let user = Users.findByField('email', req.params.email);
        if (user == undefined) {
            user = Mentors.findByField('email', req.params.email);
        }
        let productsUser = JSON.parse(user.products);
        let productoEliminar = {};
        for(let i=1; i<productsUser.length; i++){
            if(productsUser[i].id == idProduct){
                productoEliminar = productsUser[i];   
            }
        };
        productsUser = productsUser.filter(function (elemento){
			return (elemento != productoEliminar);
        });
        user.products = productsUser;

        if((user.category == 'Usuario') || (user.category == 'Administrador')) {
            Users.editUser(user);
        }
        if (user.category == 'Mentor'){
            Mentors.editMentor(user);
        }

        res.redirect('/products/productCart');
    }
    */
};

module.exports = productCartController;
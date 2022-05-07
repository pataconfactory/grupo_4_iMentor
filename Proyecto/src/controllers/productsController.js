const path = require('path');
const fs = require('fs');
const res = require('express/lib/response');

const Users = require('../models/Users');
const Mentors = require('../models/Mentors');
const bcrypt = require('bcryptjs');
const bcryptjs = require('bcryptjs');
const db = require("../../database/models");
const { promiseImpl } = require('ejs');

let productsJSON = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8');
let products = JSON.parse(productsJSON);

db.Product.findAll()
    .then((resultado) => {
        console.log(resultado)
    })

const productsController = {

    products: function (req, res) {
        db.Product.findAll()
        .then(function(products){
            res.render(path.join(__dirname, '../views/products/products'),{products: products})
        })
        
    },

    create: function (req, res) {
        db.ProductCat.findAll()
            .then(function(categories){
               return res.render(path.join(__dirname, '../views/products/productCreate'), {categories: categories})
            })
    },

    store: function (req, res) {
        db.Product.create({
            product_name: req.body.name,
            product_category_id: req.body.category,
            product_description: req.body.description,
            day: req.body.day,
            time: req.body.horario,
            price: req.body.price,
            duration: req.body.duration,
            product_image: req.file.filename,
        });
        res.redirect('/products/');

    },

    detail: function (req, res) {
        db.Product.findByPk(req.params.id, {
            include: [{association: "productCat"}, {association: "mentors_product"}]
        })
            .then(function (product) {
                res.render(path.join(__dirname, '../views/products/detail'), {product:product})
            })
    },

    edit: function (req, res) {
        let idProducto = db.Product.findByPk(req.params.id, {
            include: [{association: "productCat"}, {association: "mentors_product"}]
        });
        let productCategory = db.ProductCat.findAll();

        Promise.all([idProducto, productCategory])
            .then(function([idProducto, productCategory]){
                res.render(path.join(__dirname, '../views/products/productEdition'), {
                    idProducto:idProducto, productCategory:productCategory
                })
        })
    
},

    update: function (req, res) {
        db.Product.update({
            product_name: req.body.name,
            product_category_id: req.body.category,
            product_description: req.body.description,
            day: req.body.day,
            time: req.body.horario,
            price: req.body.price,
            duration: req.body.duration,
            product_image: req.file.filename,
        }, {
            where: {
                product_id: req.params.id
            }
        });
        res.redirect('../views/products/detail' + req.params.id);
    },

    destroy: function (req, res) {
        let idProducto = req.params.id;
        let productoEliminar = {};
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == idProducto) {
                productoEliminar = products[i];
            }
        };
        products = products.filter(function (elemento) {
            return (elemento != productoEliminar);
        });
        let productsJSON = JSON.stringify(products);
        console.log(productsJSON);
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), productsJSON);
        res.redirect('/products/');
    },

    productServices: function (req, res) {
        res.render(path.join(__dirname, '../views/products/productServices'))
    },

    productCart: function (req, res) {
        let userEmail = req.session.userLogged.email;
        let userInDB = {};
        if ((req.session.userLogged.category == 'Usuario') || (req.session.userLogged.category == 'Administrador')) {
            userInDB = Users.findByField('email', userEmail);
        }
        if (req.session.userLogged.category == 'Mentor') {
            userInDB = Mentors.findByField('email', userEmail);
        }

        let productsUser = JSON.parse(userInDB.products)
        res.render(path.join(__dirname, '../views/products/productCart'), {
            products,
            productsUser
        })
    },

    productCartAdd: function (req, res) {
        let userEmail = req.session.userLogged.email;
        let userInDB = {};
        if ((req.session.userLogged.category == 'Usuario') || (req.session.userLogged.category == 'Administrador')) {
            userInDB = Users.findByField('email', userEmail);
        }
        if (req.session.userLogged.category == 'Mentor') {
            userInDB = Mentors.findByField('email', userEmail);
        }

        let productsUser = JSON.parse(userInDB.products);
        let idProduct = req.params.id;
        let product = {};
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == idProduct) {
                product = products[i];
                productsUser.push(product);
            }
        }
        userInDB.products = productsUser;

        if ((userInDB.category == 'Usuario') || (userInDB.category == 'Administrador')) {
            Users.editUser(userInDB);
        }
        if (userInDB.category == 'Mentor') {
            Mentors.editMentor(userInDB);
        }
        res.redirect('/products/productCart')
    },

    productCartDestroy: function (req, res) {
        let idProduct = parseInt(req.params.id);
        let user = Users.findByField('email', req.params.email);
        if (user == undefined) {
            user = Mentors.findByField('email', req.params.email);
        }
        let productsUser = JSON.parse(user.products);
        let productoEliminar = {};
        for (let i = 1; i < productsUser.length; i++) {
            if (productsUser[i].id == idProduct) {
                productoEliminar = productsUser[i];
            }
        };
        productsUser = productsUser.filter(function (elemento) {
            return (elemento != productoEliminar);
        });
        user.products = productsUser;

        if ((user.category == 'Usuario') || (user.category == 'Administrador')) {
            Users.editUser(user);
        }
        if (user.category == 'Mentor') {
            Mentors.editMentor(user);
        }

        res.redirect('/products/productCart');
    }
    /*search:*/
};

module.exports = productsController;
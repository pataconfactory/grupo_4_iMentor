const path = require('path');
const fs = require('fs');
const res = require('express/lib/response');

const Users = require('../models/Users');
const Mentors = require('../models/Mentors');
const bcrypt = require('bcryptjs');
const bcryptjs = require('bcryptjs');
const db = require("../../database/models")

let productsJSON = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8');
let products = JSON.parse(productsJSON);

db.Product.findAll()
    .then((resultado) => {
        console.log(resultado)
    })

const productsController = {

    products: function (req, res) {
        res.render(path.join(__dirname, '../views/products/products'), {
            products
        })
    },

    create: function (req, res) {
        res.render(path.join(__dirname, '../views/products/productCreate'))
    },

    store: function (req, res) {
        let ultimoProducto = products.pop();
        let idUltimoProducto = ultimoProducto.id;
        let newProduct = req.body;
        newProduct.mentor_avatar = null;
        let filename = req.file.filename;
        newProduct.image = filename;
        newProduct.id = idUltimoProducto + 1;
        products.push(ultimoProducto);
        products.push(newProduct);
        let newProductsJSON = JSON.stringify(products);
        console.log(newProductsJSON); /*Se ve en la Terminal*/
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), newProductsJSON);
        res.redirect('/products/');
    },

    detail: function (req, res) {
        let idProducto = db.Product.findByPk(req.params.id)
            .then(function (product) {
                let productoRequerido = {};
                for (let i = 0; i < products.length; i++) {
                    if (products[i].id == idProducto) {
                        productoRequerido = products[i];
                        res.render(path.join(__dirname, '../views/products/detail'), {
                            productoRequerido
                        })
                    }
                }
            })
    },

    edit: function (req, res) {
        let idProducto = req.params.id;
        let productoEditar = {};
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == idProducto) {
                let productoEditar = products[i];
                res.render(path.join(__dirname, '../views/products/productEdition'), {
                    productoEditar
                })
            }
        }
    },

    update: function (req, res) {
        let idProducto = req.params.id;
        let productEnviado = req.body;
        let file = req.file;
        products.forEach(function (elemento) {
            if (elemento.id == idProducto) {
                elemento.name = productEnviado.name;
                elemento.description = productEnviado.description;
                elemento.service = productEnviado.service;
                elemento.category = productEnviado.category;
                elemento.mentor = productEnviado.mentor;
                elemento.mentor_country = productEnviado.country;
                elemento.mentor_titulo = productEnviado.titulo;
                elemento.duration = productEnviado.duration;
                elemento.horario = productEnviado.horario;
                elemento.price = productEnviado.price;
                elemento.discount = productEnviado.discount;
                if (file !== undefined) {
                    const filename = req.file.filename;
                    elemento.image = filename;
                }
            }
        });
        let productsJSON = JSON.stringify(products);
        console.log(productsJSON);
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), productsJSON);
        res.redirect('/products/');
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
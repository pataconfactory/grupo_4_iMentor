const path = require('path');
const fs = require('fs');
const res = require('express/lib/response');
const bcrypt =require('bcryptjs');
const bcryptjs = require('bcryptjs');
//const Users = require('../models/Users');
//const Mentors = require('../models/Mentors');
const db = require('../../database/models');
const Op = db.Sequelize.Op;
//let productsJSON = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8');
//let products = JSON.parse (productsJSON);

const productsController = {
    products: function(req, res) {
        db.Product.findAll({
            include: [
                {association: "mentors"},
                {association: "categories"},
                {association: "users_products"}
            ]
        })
        .then(function(products) {
            return res.render(path.join(__dirname, '../views/products/products'), {products})
        })
    },

    create: function(req, res) {
        db.ProductCategory.findAll({
            include: [
                {association: "categories"}
            ]
        })
        .then(function(categories) {
            return res.render(path.join(__dirname, '../views/products/productCreate'), {categories})
        })
    },

    store: function(req, res) {
        let filename = req.file.filename;
        let emailMentor = req.body.email;
        let datosMentor = {};
        db.User.findOne({
            where:{
                email: {[Op.like]: emailMentor}
            }
        }).then((resultado) => {
           datosMentor.userId = resultado.dataValues.user_id;
           datosMentor.mentorId = resultado.dataValues.mentor_id;
           return datosMentor;
        }).then((data) => {
            console.log(data);
            db.Product.create({
                product_name: req.body.name,
                product_category_id: req.body.category,
                mentor_id: data.mentorId,
                user_id: data.userId,
                product_description: req.body.description,
                day: req.body.dia,
                time: req.body.horario,
                price: req.body.price,
                duration: req.body.duration,
                product_image: filename
            });
        })
		res.redirect('/products/');
    },

    detail: function(req, res) {
        db.Product.findByPk(req.params.id, {
            include: [
                {association: "mentors"},
                {association: "categories"},
                {association: "users_products"}
            ]
        })
        .then(function(productoRequerido) {
            return res.render(path.join(__dirname, '../views/products/detail'), {productoRequerido})
        })          
    },

    edit: function(req, res) {
        let productoEditar = db.Product.findByPk(req.params.id, {
            include: [
                {association: "mentors"},
                {association: "categories"},
                {association: "users_products"}
            ]
        });
        let categories = db.ProductCategory.findAll({
            include: [
                {association: "categories"}
            ]
        });
        Promise.all([productoEditar, categories])
        .then(function([productoEditar, categories]) {
            return res.render(path.join(__dirname, '../views/products/productEdition'), {productoEditar, categories})
        })
    },

    update: function( req, res ) {
        let emailMentor = req.body.email;
        let datosMentor = {};
        db.User.findOne({
            where:{
                email: {[Op.like]: emailMentor}
            }
        }).then((resultado) => {
           datosMentor.userId = resultado.dataValues.user_id;
           datosMentor.mentorId = resultado.dataValues.mentor_id;
           return datosMentor;
        }).then((data) => {
            console.log(data);
            if(req.file){
                db.Product.update({
                    product_name: req.body.name,
                    product_category_id: req.body.category,
                    mentor_id: data.mentorId,
                    user_id: data.userId,
                    product_description: req.body.description,
                    day: req.body.dia,
                    time: req.body.horario,
                    price: req.body.price,
                    duration: req.body.duration,
                    product_image: req.file.filename
                },{
                    where: {
                        product_id: req.params.id
                    }
                });
            } else {
                db.Product.update({
                    product_name: req.body.name,
                    product_category_id: req.body.category,
                    mentor_id: data.mentorId,
                    user_id: data.userId,
                    product_description: req.body.description,
                    day: req.body.dia,
                    time: req.body.horario,
                    price: req.body.price,
                    duration: req.body.duration,
                },{
                    where: {
                        product_id: req.params.id
                    }
                });
            }
        })
		res.redirect('/products/detail/'+ req.params.id);
    },

    destroy: function(req, res) {
        let idProducto = req.params.id;
        let productoEliminar = {};
        for(let i=0; i<products.length; i++){
            if(products[i].id == idProducto){
                productoEliminar = products[i];   
            }
        };
        products = products.filter(function (elemento){
			return (elemento != productoEliminar);
        });
        let productsJSON = JSON.stringify(products);
        console.log(productsJSON);
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), productsJSON);
        res.redirect('/products/');
    },

    productServices: function(req, res) {
        res.render(path.join(__dirname, '../views/products/productServices'))
    },

    productCart: function(req, res) {
        let userEmail = req.session.userLogged.email;
        let userInDB = {};
        if((req.session.userLogged.category == 'Usuario') || (req.session.userLogged.category == 'Administrador')) {
            userInDB = Users.findByField('email', userEmail);
        }
        if (req.session.userLogged.category == 'Mentor'){
            userInDB = Mentors.findByField('email', userEmail);
        }
       
        let productsUser = JSON.parse(userInDB.products)
        res.render(path.join(__dirname, '../views/products/productCart'), {products, productsUser})
    },
    
    productCartAdd: function(req, res) {
        let userEmail = req.session.userLogged.email;
        let userInDB = {};
        if((req.session.userLogged.category == 'Usuario') || (req.session.userLogged.category == 'Administrador')) {
            userInDB = Users.findByField('email', userEmail);
        }
        if (req.session.userLogged.category == 'Mentor'){
            userInDB = Mentors.findByField('email', userEmail);
        }

        let productsUser = JSON.parse(userInDB.products);
        let idProduct = req.params.id;
        let product = {};
        for(let i=0; i<products.length; i++){
            if(products[i].id == idProduct){
                product = products[i]; 
                productsUser.push(product);
            }
        }
        userInDB.products = productsUser;

        if((userInDB.category == 'Usuario') || (userInDB.category == 'Administrador')) {
            Users.editUser(userInDB);
        }
        if (userInDB.category == 'Mentor'){
            Mentors.editMentor(userInDB);
        }
        res.redirect('/products/productCart')
    },

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
    /*search:*/
};

module.exports = productsController;
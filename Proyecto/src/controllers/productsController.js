const path = require('path');
const {validationResult} = require('express-validator');
const db = require('../../database/models');
const Op = db.Sequelize.Op;

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
        db.User.findAll({
            include: [
                {association: "roles"},
                {association: "users"},
                {association: "users_products"}
            ]
        })
        .then(function(usuarios) {
            let users = [];
            for (const oneUser of usuarios) {
               users.push(oneUser.dataValues);
            }
            return res.render(path.join(__dirname, '../views/products/productCreate'), {users})
        });
    },

    store: function(req, res) {
        let errors = validationResult(req);
        db.User.findAll({
            include: [
                {association: "roles"},
                {association: "users"},
                {association: "users_products"}
            ]
        })
        .then(function(usuarios) {
            if (errors.errors.length > 0) {
                let users = [];
                for (const oneUser of usuarios) {
                users.push(oneUser.dataValues);
                }
                return res.render(path.join(__dirname, '../views/products/productCreate'), {users, errors: errors.mapped(), old: req.body});
            }
        });

        if(req.file){
            let filename = req.file.filename;
            let idMentor = req.body.mentor;
            let datosMentor = {};
            db.User.findOne({
                where:{
                    mentor_id: {[Op.like]: idMentor}
                }
            }).then((resultado) => {
            datosMentor.userId = resultado.dataValues.user_id;
            datosMentor.mentorId = resultado.dataValues.mentor_id;
            return datosMentor;
            }).then((data) => {
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
                }).then((product) => {
                    res.redirect('/products/');
                });
            })
        }
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
        let usuarios = db.User.findAll({
            include: [
                {association: "roles"},
                {association: "users"},
                {association: "users_products"}
            ]
        });
        Promise.all([productoEditar, usuarios])
        .then(function([productoEditar, usuarios]) {
            let users = [];
            for (const oneUser of usuarios) {
               users.push(oneUser.dataValues);
            } 
            return res.render(path.join(__dirname, '../views/products/productEdition'), {productoEditar, users})
        })
    },

    update: function( req, res ) {
        let errors = validationResult(req);
        let productoEditar = db.Product.findByPk(req.params.id, {
            include: [
                {association: "mentors"},
                {association: "categories"},
                {association: "users_products"}
            ]
        });
        let usuarios = db.User.findAll({
            include: [
                {association: "roles"},
                {association: "users"},
                {association: "users_products"}
            ]
        });
        Promise.all([productoEditar, usuarios])
        .then(function([productoEditar, usuarios]) {
            if (errors.errors.length > 0) {
                let users = [];
                for (const oneUser of usuarios) {
                users.push(oneUser.dataValues);
                } 
                return res.render(path.join(__dirname, '../views/products/productEdition'), {productoEditar, users,  errors: errors.mapped(), old: req.body})
            }
        })

        if (errors.errors.length == 0) {
            let idMentor = req.body.mentor;
            let datosMentor = {};
            db.User.findOne({
                where:{
                    mentor_id: {[Op.like]: idMentor}
                }
            }).then((resultado) => {
            datosMentor.userId = resultado.dataValues.user_id;
            datosMentor.mentorId = resultado.dataValues.mentor_id;
            return datosMentor;
            }).then((data) => {
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
                    }).then(function(product){
                        return res.redirect('/products/detail/'+ req.params.id);
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
                    }).then(function(product){
                        return res.redirect('/products/detail/'+ req.params.id);
                    });
                }
            })
        }
    },

    destroy: function(req, res) {
        db.Product.destroy({
            where: {
                product_id: req.params.id
            }
        }).then(function(product){
            res.redirect('/products/');
        })
        
    },

    productServices: function(req, res) {
        res.render(path.join(__dirname, '../views/products/productServices'))
    },

    search: function(req, res){
        let search = req.body.search;
        db.Product.findAll({
            include: [
                {association: "mentors"},
                {association: "categories"},
                {association: "users_products"}
            ], where: {
                product_name: {[Op.like]: '%'+search+'%'}
            }
        })
        .then(function(products){
            return res.render(path.join(__dirname, '../views/products/products'), {products})
        })
    }
};

module.exports = productsController;
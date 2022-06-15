const path = require('path');
const db = require("../../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

const apiProductsController = {
    list: (req, res) => {
        db.Product.findAll({
            include: [
                {association: "mentors"},
                {association: "categories"},
                {association: "users_products"},
                {association: "bookings_product"}
            ]
        })
        .then(products => {
            let frontEnd = 0;
            let backEnd = 0;
            let ui_ux = 0;
            let base_de_datos = 0;
            let marketing_digital = 0;
            let analisis_de_datos = 0;

            for (const oneProduct of products) {
                if(oneProduct.product_category_id == 1){
                    frontEnd = frontEnd + 1;
                }

                if(oneProduct.product_category_id == 2){
                    backEnd = backEnd + 1;
                }

                if(oneProduct.product_category_id == 3){
                    ui_ux = ui_ux + 1;
                }

                if(oneProduct.product_category_id == 4){
                    base_de_datos = base_de_datos + 1;
                }

                if(oneProduct.product_category_id == 5){
                    marketing_digital = marketing_digital + 1;
                }

                if(oneProduct.product_category_id == 6){
                    analisis_de_datos = analisis_de_datos + 1;
                }
            }
            
            let categorias = {};
            categorias.front_End = frontEnd;
            categorias.back_End = backEnd;
            categorias.ui_ux = ui_ux;
            categorias.base_de_datos = base_de_datos;
            categorias.marketing_digital = marketing_digital;
            categorias.analisis_de_datos = analisis_de_datos;

            let productos = [];
            let producto;
            for (const oneProduct of products) {
                productos.push(
                   producto = {
                    id: oneProduct.product_id,
                    name: oneProduct.product_name,
                    description: oneProduct.product_description,
                    detail: 'http://localhost:3001/api/products/'+oneProduct.product_id
                })
            }

            let respuesta = {
                status : 200,
                count: products.length,
                countByCategory: categorias,
                products: productos
            }
                res.json(respuesta);
            })
    },
    
    detail: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: [
                {association: "mentors"},
                {association: "categories"},
                {association: "users_products"},
                {association: "bookings_product"}
            ]
        })
        .then(product => {
            let respuesta = {
                id: product.user_id,
                nombre: product.product_name,
                id_categoria: product.product_category_id,
                categoria: product.categories.category_name,
                id_mentor: product.mentor_id,
                id_usuario: product.user_id,
                descripción: product.product_description,
                día: product.day,
                horario: product.time,
                fecha: product.date,
                precio: product.price,
                duración: product.duration,
                imagen_de_perfil: 'http://localhost:3001/api/users/'+product.user_id+'/'+product.product_image
            }
            res.json(respuesta);
        });
    },

    image: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: [
                {association: "mentors"},
                {association: "categories"},
                {association: "users_products"},
                {association: "bookings_product"}
            ]
        })
        .then(product => {
            let image = {
                imagen_del_producto: product.product_image
            }
            res.json(image);
        });
    }
};

module.exports = apiProductsController;
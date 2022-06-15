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
                    category: [{ 
                        id_category: oneProduct.categories.product_category_id,
                        name_category: oneProduct.categories.category_name
                    }],
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
                id_product: product.user_id,
                name: product.product_name,
                id_category: product.product_category_id,
                id_mentor: product.mentor_id,
                id_user: product.user_id,
                description: product.product_description,
                day: product.day,
                time: product.time,
                date: product.date,
                price: product.price,
                duration: product.duration,
                category: [{ 
                    id_category: product.categories.product_category_id,
                    name_category: product.categories.category_name
                }],
                mentor: [{
                    id_mentor: product.users_products.mentor_id,
                    name_mentor: product.users_products.first_name +' '+ product.users_products.last_name,
                    country_mentor: product.users_products.country,
                    title_mentor: product.users_products.title,
                    description_mentor: product.mentors.description,
                    imagen_del_mentor: '/img/avatars/'+product.users_products.avatar
                }],
                imagen_del_producto: '/img/products/'+product.product_image
            }
            res.json(respuesta);
        });
    }
};

module.exports = apiProductsController;
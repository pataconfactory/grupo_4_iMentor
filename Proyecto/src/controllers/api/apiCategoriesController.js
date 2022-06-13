const path = require('path');
const db = require("../../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const apiCategoriesController = {
    list: (req, res) => {
        db.ProductCategory.findAll({
            include: [
                {association: "categories"}
            ]
        })
        .then(categories => {
            let categorias = [];
            let categoria;
            for (const oneCategory of categories) {
                categorias.push(
                   categoria = {
                    id: oneCategory.product_category_id,
                    name: oneCategory.category_name,
                })
            }

            let respuesta = {
                status : 200,
                count: categories.length,
                categories: categorias
            }
                res.json(respuesta);
            })
    }
}

module.exports = apiCategoriesController;

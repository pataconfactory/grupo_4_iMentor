const path = require('path');
const db = require("../../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

const apiCategoriesController = {
    list: (req, res) => {
        db.ProductCategory.findAll({
            include: [
                {association: "categories"},
            ]
        })
        .then(categories => {
            return res.json(categories)
                })
            }

    
};

module.exports = apiCategoriesController;
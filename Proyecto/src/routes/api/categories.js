const express = require('express');
const router = express.Router();
const apiCategoriesController = require('../../controllers/api/apiCategoriesController');

//Rutas

//Listado de categorias
router.get('/', apiCategoriesController.list);


module.exports = router;
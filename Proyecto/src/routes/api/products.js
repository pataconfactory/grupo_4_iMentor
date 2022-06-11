const express = require('express');
const router = express.Router();
const apiProductsController = require('../../controllers/api/apiProductsController');

//Rutas

//Listado de todos los productos
router.get('/', apiProductsController.list);

//Detalle del producto
router.get('/:id', apiProductsController.detail);

module.exports = router;
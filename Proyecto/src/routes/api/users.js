const express = require('express');
const router = express.Router();
const apiUsersController = require('../../controllers/api/apiUsersController');

//Rutas

//Listado de todos los usuarios
router.get('/', apiUsersController.list);

//Detalle del usuario
router.get('/:id', apiUsersController.detail);

//Imagen del usuario
router.get('/:id/:avatar', apiUsersController.avatar);

module.exports = router;
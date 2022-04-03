const express = require('express');
const router = express.Router();
const path = require('path');

const usersController  = require('../controllers/usersController');


//Rutas

//Formulario de registro
router.get('/register' , usersController.register);

//formulario de login
router.get('/login', usersController.login)


//crear usuario proceso de registro
router.post('/register', usersController.processRegister);


module.exports = router;
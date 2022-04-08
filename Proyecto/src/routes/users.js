const express = require('express');
const router = express.Router();
const path = require('path');

const usersController  = require('../controllers/usersController');
const upload = require('../middlewares/multerRegister');

const validationsRegister = require('../middlewares/ValidationsRegister')


//Rutas

//Formulario de registro
router.get('/register', usersController.register);

//crear usuario proceso de registro
router.post('/register', upload.single('avatar'), validationsRegister, usersController.processRegister);

//formulario de login
router.get('/login', usersController.login);

//Perfil de Usuario
router.get('/profile/:userId', usersController.profile);

module.exports = router;
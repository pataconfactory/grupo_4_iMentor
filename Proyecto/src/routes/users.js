const express = require('express');
const router = express.Router();
const path = require('path');

const usersController  = require('../controllers/usersController');
const upload = require('../middlewares/multerRegister');

//Rutas

//Formulario de registro
router.get('/register', usersController.register);

//formulario de login
router.get('/login', usersController.login);

//crear usuario proceso de registro
router.post('/register', upload.single('avatar'), usersController.processRegister);

//Perfil de Usuario
router.get('/profile/:userId', usersController.profile);

module.exports = router;
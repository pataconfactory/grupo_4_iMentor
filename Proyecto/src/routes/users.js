const express = require('express');
const router = express.Router();
const path = require('path');

const usersController  = require('../controllers/usersController');
const upload = require('../middlewares/multerRegister');

const validationsRegister = require('../middlewares/ValidationsRegister');
const validationsLogin = require('../middlewares/ValidationsLogin');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//Rutas

//Formulario de registro
router.get('/register', guestMiddleware, usersController.register);

//crear usuario proceso de registro
router.post('/register', upload.single('avatar'), validationsRegister, usersController.processRegister);

//formulario de login
router.get('/login', guestMiddleware, usersController.login);

//procesa el login
router.post('/login', validationsLogin, usersController.loginProcess);

//Perfil de Usuario
router.get('/profile', authMiddleware, usersController.profile);

//Logout
router.get('/logout', usersController.logout);

module.exports = router;
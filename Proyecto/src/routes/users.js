const express = require('express');
const router = express.Router();
const path = require('path');

const usersController  = require('../controllers/usersController');
const upload = require('../middlewares/multerRegister');

const validationsRegister = require('../middlewares/ValidationsRegister');
const validationsLogin = require('../middlewares/ValidationsLogin');
const validationsUserEdit = require('../middlewares/ValidationsUserEdit');
const validationsUserEditPassword = require('../middlewares/ValidationsUserEditPassword');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//Rutas

//Formulario de registro
router.get('/register', guestMiddleware, usersController.register);
router.post('/register', upload.single('avatar'), validationsRegister, usersController.processRegister);

//edición de usuario
router.get('/edit/:id', usersController.editUsers);
router.put('/edit/:id', upload.single('avatar'), validationsUserEdit, usersController.updateUsers);

//edición de password
router.get('/editPW/:id/:email', usersController.editUsersPassword);
router.put('/editPW/:id/:email', validationsUserEditPassword, usersController.updateUsersPassword);

//formulario de login
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', validationsLogin, usersController.loginProcess);

//Perfil de Usuario
router.get('/profile', authMiddleware, usersController.profile);

//Listado de usuarios
router.get ('/list', authMiddleware, guestMiddleware, usersController.listUsers);

//Detalle de usuarios
router.get ('/detail/:id/:email', authMiddleware, guestMiddleware, usersController.detailUsers);

//Eliminar un usuario
router.delete('/delete/:id/:email', usersController.destroyUsers);

//Logout
router.get('/logout', usersController.logout);

module.exports = router;
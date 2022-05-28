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


//Register form for users
router.get('/register', guestMiddleware, usersController.register);
router.post('/register', upload.single('avatar'), validationsRegister, usersController.processRegister);

//Register form for mentors
router.get('/mentorregister', guestMiddleware, usersController.registerMentor);
router.post('/mentorregister', upload.single('avatar'), validationsRegister, usersController.processRegisterMentor);

//User edit
router.get('/edit/:id', usersController.editUsers);
router.put('/edit/:id', upload.single('avatar'), validationsUserEdit, usersController.updateUsers);

//Password edit
router.get('/editPW/:id/:email', usersController.editUsersPassword);
router.put('/editPW/:id/:email', validationsUserEditPassword, usersController.updateUsersPassword);

//Login form
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', validationsLogin, usersController.loginProcess);

//User profile
router.get('/profile', authMiddleware, usersController.profile);

//Users list
router.get ('/list', authMiddleware, guestMiddleware, usersController.listUsers);

//User details
router.get ('/detail/:id/:email', authMiddleware, guestMiddleware, usersController.detailUsers);

//User delete
router.delete('/delete/:id/:email', usersController.destroyUsers);

//Log out
router.get('/logout', usersController.logout);

module.exports = router;
const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
const validationsContact = require('../middlewares/ValidationContact');

router.get('/', mainController.index);

router.get('/paginaEnConstruccion', mainController.paginaConstruccion);

router.get('/contact', mainController.contact);
router.post('/contact', validationsContact, mainController.processContact);

module.exports = router;
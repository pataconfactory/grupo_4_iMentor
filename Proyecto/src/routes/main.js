const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

router.get('/paginaEnConstruccion', mainController.paginaConstruccion);
router.get('/contact', mainController.contact);
router.post('/contact', mainController.processContact);


module.exports = router;
const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

router.get('/paginaEnConstruccion', mainController.teach_en_imentor);

module.exports = router;
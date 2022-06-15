const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contactController');


router.get('/contact', contactController.contact);
router.post('/contact', contactController.processContact);

module.exports = router;

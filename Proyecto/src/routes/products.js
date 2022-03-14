const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');


router.get('/', productsController.products);

router.get('/productEdition', productsController.create);

router.get('/:id/', productsController.detail); 

router.get('/productCart', productsController.productCart);


/*router.get('/search', productsController.search); */

module.exports = router;
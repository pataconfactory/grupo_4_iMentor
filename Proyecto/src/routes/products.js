const express = require('express');
const router = express.Router();
const path = require('path');

const productsController = require('../controllers/productsController');
const upload = require('../middlewares/multerProducts');
const authMiddleware = require('../middlewares/authMiddleware');

//Rutas

router.get('/', productsController.products);

router.get('/create', productsController.create);
router.post('/', upload.single('image'), productsController.store);

router.get('/detail/:id', productsController.detail)

router.get('/edit/:id', productsController.edit)
router.put('/edit/:id', upload.single('image'), productsController.update)

router.delete('/delete/:id', productsController.destroy)

router.get('/productCart', authMiddleware, productsController.productCart);

//Agregar productos al carrito
router.post('/productCart/:id', authMiddleware, productsController.productCartAdd);

//Eliminar productos del carrito
router.delete('/productCart/:id/:email', authMiddleware, productsController.productCartDestroy);

router.get('/productServices', productsController.productServices);

/*router.get('/search', productsController.search); */

module.exports = router;
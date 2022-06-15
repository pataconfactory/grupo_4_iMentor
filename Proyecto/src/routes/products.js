const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');
const productCartController = require('../controllers/productCartController');
const upload = require('../middlewares/multerProducts');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const validationsProductCreate = require('../middlewares/ValidationsProductCreate');
const validationsProductEdition = require('../middlewares/ValidationsProductEdition');

//Rutas

router.get('/', productsController.products);

router.get('/create', authMiddleware, guestMiddleware, productsController.create);
router.post('/', upload.single('image'), validationsProductCreate, productsController.store);

router.get('/detail/:id', productsController.detail);

router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', upload.single('image'), validationsProductEdition, productsController.update);

router.delete('/delete/:id', productsController.destroy);

router.get('/productServices', productsController.productServices);

router.post('/search', productsController.search);

router.get('/productInvoice', authMiddleware, productsController.productInvoice);

router.get('/productCart', authMiddleware, productCartController.productCart);
router.post('/productCart/:id', productCartController.productsToPay);

//Agregar productos al carrito
router.put('/productCart/:id', authMiddleware, productCartController.productCartAdd);

//Eliminar productos del carrito
router.delete('/productCart/:id', authMiddleware, productCartController.productCartDestroy);



module.exports = router;
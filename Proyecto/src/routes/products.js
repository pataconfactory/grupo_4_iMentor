const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const productsController = require('../controllers/productsController');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img/products')
    },
    filename: function (req, file, cb) {
        cb(null, 'product'+'-'+ Date.now() + path.extname(file.originalname))
    }
});
    
var upload = multer({ storage: storage });

//Rutas

router.get('/', productsController.products);

router.get('/create', productsController.create);
router.post('/', upload.single('image'), productsController.store);

router.get('/detail/:id', productsController.detail)

router.get('/edit/:id', productsController.edit)
router.put('/edit/:id', upload.single('image'), productsController.update)

router.delete('/delete/:id', productsController.destroy)

router.get('/productCart', productsController.productCart);

router.get('/productServices', productsController.productServices);

/*router.get('/search', productsController.search); */

module.exports = router;
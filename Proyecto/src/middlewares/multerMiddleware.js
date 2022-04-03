const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img/products');
    },
    filename: function (req, file, cb) {
        cb(null, 'product'+'-'+ Date.now() + path.extname(file.originalname))
    }
});
    
const upload = multer({storage: storage});

module.exports = upload;

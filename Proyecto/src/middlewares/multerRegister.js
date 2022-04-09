const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img/avatars');
    },
    filename: function (req, file, cb) {
        cb(null, 'user'+'-'+ Date.now() + path.extname(file.originalname))
    }
});
    
const upload = multer({storage: storage});

module.exports = upload;

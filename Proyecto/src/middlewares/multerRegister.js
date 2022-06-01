const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img/avatars');
    },
    filename: function (req, file, cb) {
        if(req.body.category == 1) {
            cb(null, 'user'+'-'+ Date.now() + path.extname(file.originalname));
        } else if (req.body.category == 2) {
            cb(null, 'admin'+'-'+ Date.now() + path.extname(file.originalname));
        } else {
            cb(null, 'mentor'+'-'+ Date.now() + path.extname(file.originalname));
        }
    }
});
    
const upload = multer({storage: storage});

module.exports = upload;

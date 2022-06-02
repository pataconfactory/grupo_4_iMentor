const {check} = require('express-validator');
const path = require('path');

const validationsProductCreate = [
    check('name').notEmpty().withMessage('Debe completar el nombre del producto').bail().isLength({min:5}).withMessage('El nombre debe tener al menos 5 caracteres'),
    check('description').notEmpty().withMessage('Debe completar la descripción del producto').bail().isLength({min:20}).withMessage('La descripción debe tener al menos 20 caracteres'),
    check('category').notEmpty().withMessage('Debe seleccionar la categoría del producto'),
    check('duration').notEmpty().withMessage('Debe completar la duración de la mentoría').bail().isNumeric().withMessage('Debe introducir la duración utilizando números'),
    check('horario').notEmpty().withMessage('Debe seleccionar el horario de la mentoría'),
    check('dia').notEmpty().withMessage('Debe seleccionar el día de la mentoría'),
    check('price').notEmpty().withMessage('Debe completar el precio').bail().isNumeric().withMessage('Debe introducir el precio utilizando números'),
    check('image').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];

        if(!file) {
            throw new Error('Debe subir una imagen de usuario');
        } else {
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivos permitidas son ${acceptedExtensions.join (', ')}`);
            }
        }
        return true;
    })
]; 

module.exports = validationsProductCreate;
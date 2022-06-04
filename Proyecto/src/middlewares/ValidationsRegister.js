const {check} = require('express-validator');
const path = require('path');

const validationsRegister = [
    check('first_name').notEmpty().withMessage('Debe completar el nombre').bail().isLength({min:2}).withMessage('El nombre debe tener al menos 2 caracteres'),
    check('last_name').notEmpty().withMessage('Debe completar el apellido').bail().isLength({min:2}).withMessage('El apellido debe tener al menos 2 caracteres'),
    check('user_name').notEmpty().withMessage('Debe completar el nombre de usuario').bail().isLength({min:2}).withMessage('El nombre de usuario debe tener al menos 2 caracteres'),
    check('email').notEmpty().withMessage('Debe completar el email').bail().isEmail().withMessage('Introduzca un email válido'),
    check('date_birth').notEmpty().withMessage('Debe completar la fecha de nacimiento'),
    check('age').notEmpty().withMessage('Debe completar la edad').bail().isNumeric().withMessage('Debe introducir la edad utilizando números'),
    check('genero').notEmpty().withMessage('Debe seleccionar el genero'),
    check('country').notEmpty().withMessage('Debe seleccionar el país'),
    check('password').notEmpty().withMessage('Debe completar la contraseña').bail().isLength({min:8, max:12}).withMessage('Debe introducir una contraseña que tenga como mínimo 8 caracteres y como máximo 15 caracteres').bail().isStrongPassword().withMessage('Debe introducir una contraseña que contenga letras mayúsculas, minúsculas, un número y un carácter especial'),
    check('category').notEmpty().withMessage('Debe seleccionar el rol del usuario'),
    check('title').notEmpty().withMessage('Debe completar el título'),
    check('avatar').custom((value, {req}) => {
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

module.exports = validationsRegister;
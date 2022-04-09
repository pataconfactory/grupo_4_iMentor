const {check} = require('express-validator');
const path = require('path');

const validationsRegister = [
    check('firs_name').notEmpty().withMessage('Debe completar el nombre'),
    check('last_name').notEmpty().withMessage('Debe completar el apellido'),
    check('user_name').notEmpty().withMessage('Debe completar el nombre de usuario'),
    check('email').notEmpty().withMessage('Debe completar el email').bail().isEmail().withMessage('Introduzca un email valido'),
    check('date_birth').notEmpty().withMessage('Debe completar la fecha de nacimiento'),
    check('age').notEmpty().withMessage('Debe completar la edad').bail().isNumeric().withMessage('Debe introducir la edad utilizando números'),
    check('genero').notEmpty().withMessage('Debe seleccionar el genero'),
    check('country').notEmpty().withMessage('Debe completar el país'),
    check('password').notEmpty().withMessage('Debe completar la contraseña').bail().isLength({min:8, max:12}).withMessage('Debe introducir una contraseña que tenga como mínimo 8 caracteres y como máximo 12 caracteres').bail().isAlphanumeric().withMessage('Debe introducir una contraseña que contenga solo letras y números'),
    check('category').notEmpty().withMessage('Debe seleccionar la categoría del usuario'),
    check('title').notEmpty().withMessage('Debe completar el título'),
    check('avatar').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

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
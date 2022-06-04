const {check} = require('express-validator');
const path = require('path');

const validationsUserEditPassword = [
    check('password_old').notEmpty().withMessage('Debe completar la contraseña').bail().isLength({min:8, max:12}).withMessage('Debe introducir una contraseña que tenga como mínimo 8 caracteres y como máximo 12 caracteres').bail().isStrongPassword().withMessage('Debe introducir una contraseña que contenga letras mayúsculas, minúsculas, un número y un carácter especial'),
    check('password').notEmpty().withMessage('Debe completar la contraseña').bail().isLength({min:8, max:12}).withMessage('Debe introducir una contraseña que tenga como mínimo 8 caracteres y como máximo 12 caracteres').bail().isStrongPassword().withMessage('Debe introducir una contraseña que contenga letras mayúsculas, minúsculas, un número y un carácter especial')
]; 

module.exports = validationsUserEditPassword;
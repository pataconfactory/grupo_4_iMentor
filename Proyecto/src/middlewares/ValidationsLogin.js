const {check} = require('express-validator');
const path = require('path');

const validationsLogin = [
    check('email').notEmpty().withMessage('Debe completar el email').bail().isEmail().withMessage('Introduzca un email valido'),
    check('password').notEmpty().withMessage('Debe completar la contraseña').bail().isLength({min:8, max:12}).withMessage('Debe introducir una contraseña que tenga como mínimo 8 caracteres y como máximo 12 caracteres').bail().isStrongPassword().withMessage('Debe introducir una contraseña que contenga letras mayúsculas, minúsculas, un número y un carácter especial')
]; 

module.exports = validationsLogin;
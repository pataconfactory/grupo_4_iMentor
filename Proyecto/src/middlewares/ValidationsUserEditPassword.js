const {check} = require('express-validator');
const path = require('path');

const validationsUserEditPassword = [
    check('password_old').notEmpty().withMessage('Debe completar la contraseña').bail().isLength({min:8, max:12}).withMessage('Debe introducir una contraseña que tenga como mínimo 8 caracteres y como máximo 12 caracteres').bail().isAlphanumeric().withMessage('Debe introducir una contraseña que contenga solo letras y números'),
    check('password').notEmpty().withMessage('Debe completar la contraseña').bail().isLength({min:8, max:12}).withMessage('Debe introducir una contraseña que tenga como mínimo 8 caracteres y como máximo 12 caracteres').bail().isAlphanumeric().withMessage('Debe introducir una contraseña que contenga solo letras y números')
]; 

module.exports = validationsUserEditPassword;
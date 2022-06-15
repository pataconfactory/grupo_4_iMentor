const {check} = require('express-validator');
const path = require('path');

const validationsContact= [
    check('name').notEmpty().withMessage('Debe completar el nombre').bail().isLength({min:2}).withMessage('El nombre debe tener al menos 2 caracteres'),
    check('email').notEmpty().withMessage('Debe completar el email').bail().isEmail().withMessage('Introduzca un email válido'),
    check('phone').notEmpty().withMessage('Debe completar el número de telefono').bail().isNumeric().withMessage('Debe introducir el teléfono usando solo dígitos'),
    check('message').notEmpty().withMessage('Debe completar el mensaje').bail().isLength({min:20}).withMessage('El mensaje debe tener al menos 20 caracteres'),
]; 

module.exports = validationsContact;
const {check} = require('express-validator');
const path = require('path');

const validationsUserEdit = [
    check('first_name').notEmpty().withMessage('Debe completar el nombre'),
    check('last_name').notEmpty().withMessage('Debe completar el apellido'),
    check('date_birth').notEmpty().withMessage('Debe completar la fecha de nacimiento'),
    check('age').notEmpty().withMessage('Debe completar la edad').bail().isNumeric().withMessage('Debe introducir la edad utilizando números'),
    check('genero').notEmpty().withMessage('Debe seleccionar el genero'),
    check('country').notEmpty().withMessage('Debe completar el país'),
    check('title').notEmpty().withMessage('Debe completar el título')
]; 

module.exports = validationsUserEdit;
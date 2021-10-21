const { body } = require('express-validator');

const validations = [
    body('fullname').exists().notEmpty().withMessage('Debes Completar tu Nombre'),
    body('email').exists().isEmail().notEmpty().withMessage('Complete su mail'),
    body('acept').notEmpty().withMessage('Por Favor acepte los terminos y condiciones')
]

module.exports = validations;

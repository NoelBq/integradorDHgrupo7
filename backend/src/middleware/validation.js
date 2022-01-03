const { body } = require('express-validator');

const validations = [
    body('fullname').exists().notEmpty().withMessage('Ups! Debes completar tu nombre!'),
    body('userAddress').exists().notEmpty().withMessage('Ups! Debes completar tu direccion!'),
    body('city').exists().notEmpty().withMessage('Ups! Debes poner tu ciudad!'),
    body('email').exists().isEmail().notEmpty().withMessage('Ups! Debes poner tu email!'),
    body('accept').notEmpty().withMessage('Por Favor acepte los terminos y condiciones')
]

module.exports = validations;
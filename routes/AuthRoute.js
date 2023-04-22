const express = require('express')
const { register,login } = require('../controllers/AuthController')
const { body } = require('express-validator');
const { ValidatorMiddle } = require('../middlewares/ValidatorMiddle');

const router = express.Router()

router.post('/register', body('email').notEmpty(), body('username').notEmpty(), body('password').notEmpty(), body('first_name').notEmpty(), body('last_name').notEmpty(), ValidatorMiddle, register)
router.post('/login', body('email').notEmpty(), body('password').notEmpty(), ValidatorMiddle, login)

module.exports = router

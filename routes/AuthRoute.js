const express = require('express')
const { register } = require('../controllers/AuthController')
const { body } = require('express-validator');
const { ValidatorMiddle } = require('../middlewares/ValidatorMiddle');

const router = express.Router()

router.get('/register', body('email').notEmpty(), body('username').notEmpty(), body('password').notEmpty(), body('first_name').notEmpty(), body('last_name').notEmpty(), ValidatorMiddle, register)

module.exports = router

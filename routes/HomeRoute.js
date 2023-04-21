const express = require('express')
const {index}  = require('../controllers/HomeController')

const router = express.Router()

router.get('/', index)

module.exports = router
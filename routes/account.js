const express = require('express')
const {
  logIn
} = require('../controllers/accountController')

const router = express.Router()

router.post('/', logIn)

module.exports = router
const express = require('express')
const {
  getInfos,
  getInfo
} = require('../controllers/COVIDController')

const router = express.Router()

router.get('/main', getInfos)

module.exports = router
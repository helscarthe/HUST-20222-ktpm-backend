const express = require('express')
const {
  getHo_khaus,
  getHo_khau,
  createHo_khau,
  deleteHo_khau,
  updateHo_khau
} = require('../controllers/ho_khauController')

const router = express.Router()

router.get('/', getHo_khaus)

router.get('/:id', getHo_khau)

router.post('/', createHo_khau)

router.delete('/:id', deleteHo_khau)

router.patch('/:id', updateHo_khau)

module.exports = router
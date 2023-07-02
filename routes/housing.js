const express = require('express')
const {
  getHo_khau,
  getCong_dan,
  getHo_khaus,
  getCong_dans,
  createHousing,
  deleteHousing,
  updateHousing
} = require('../controllers/housingController')

const router = express.Router()

router.get('/ho_khau/:id', getHo_khau)

router.get('/cong_dan/:id', getCong_dan)

router.get('/ho_khau', getHo_khaus)

router.get('/cong_dan', getCong_dans)

router.post('/', createHousing)

router.delete('/:id', deleteHousing)

router.patch('/:id', updateHousing)

module.exports = router
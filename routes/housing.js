const express = require('express')
const {
  getHo_khau_Chu_ho,
  getHo_khau_Thanh_vien,
  getCong_dan,
  getCong_danbyCCCD,
  getHo_khaus,
  getCong_dans,
  createHousing,
  deleteHousing,
  updateHousing
} = require('../controllers/housingController')

const router = express.Router()

router.get('/ho_khau/:id', getHo_khau_Chu_ho)
router.get('/ho_khau/thanh_vien/:id', getHo_khau_Thanh_vien)

router.get('/cong_dan/:id', getCong_dan)
router.get('/cong_dan/cccd/:cccd', getCong_danbyCCCD)

router.get('/ho_khau', getHo_khaus)

router.get('/cong_dan', getCong_dans)

router.post('/', createHousing)

router.delete('/:id', deleteHousing)

router.patch('/:id', updateHousing)

module.exports = router
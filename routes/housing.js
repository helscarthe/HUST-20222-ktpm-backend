const express = require('express')
const {
  getHousings,
  getHousing,
  createHousing,
  deleteHousing,
  updateHousing
} = require('../controllers/housingController')

const router = express.Router()

router.get('/', getHousings)

router.get('/:id', getHousing)

router.post('/', createHousing)

router.delete('/:id', deleteHousing)

router.patch('/:id', updateHousing)

module.exports = router
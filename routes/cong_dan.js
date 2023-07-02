const express = require('express')
const {
  getCong_dans,
  getCong_dan,
  createCong_dan,
  deleteCong_dan,
  updateCong_dan
} = require('../controllers/cong_danController')

const router = express.Router()

router.get('/', getCong_dans)

router.get('/:id', getCong_dan)

router.post('/', createCong_dan)

router.delete('/:id', deleteCong_dan)

router.patch('/:id', updateCong_dan)

module.exports = router
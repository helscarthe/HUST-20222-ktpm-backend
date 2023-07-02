const Housing = require('../models/Model')

// get all cong_dan
const getHousings = async (req, res) => {
  const housings = await Housing.find({}).populate("cong_dan").populate("nha").sort({id_nha: 1})

  res.status(200).json(housings)
}

// get one cong_dan
const getHousing = async (req, res) => {
  const { id } = req.params

  const housing = await Housing.find({id_cong_dan : id}).populate("cong_dan").populate("nha")

  if (!housing.length) {
    return res.status(404).json({error: 'Công dân không tồn tại.'})
  }

  res.status(200).json(housing)
}

// create new cong_dan
const createHousing = async (req, res) => {
  const {id_nha, id_cong_dan, la_chu_ho, trang_thai_cu_tru, quan_he_chu_ho, bat_dau_tam_tru_vang, ket_thuc_tam_tru_vang} = req.body;

  // add doc to db
  try {
    const housing = await Housing.create({id_nha, id_cong_dan, la_chu_ho, trang_thai_cu_tru, quan_he_chu_ho, bat_dau_tam_tru_vang, ket_thuc_tam_tru_vang})
    res.status(200).json(housing);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

// delete cong_dan
const deleteHousing = async (req, res) => {
  const { id } = req.params

  const housing = await Housing.findOneAndDelete({id_nha : id})

  if (!housing) {
    return res.status(400).json({error: 'Công dân không tồn tại.'})
  }

  res.status(200).json(housing)
}

// update cong_dan
const updateHousing = async (req, res) => {
  const { id } = req.params

  const housing = await Housing.findOneAndUpdate({id_nha : id}, {
    ...req.body
  })

  if (!housing) {
    return res.status(400).json({error: 'Công dân không tồn tại.'})
  }

  res.status(200).json(housing)
}

module.exports = {
  getHousings,
  getHousing,
  createHousing,
  deleteHousing,
  updateHousing
}
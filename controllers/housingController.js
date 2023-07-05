const Housing = require('../models/housingModel')
const Cong_dan = require('../models/cong_danModel')
const Ho_khau = require('../models/ho_khauModel')

// get all cong_dan
const getCong_dans = async (req, res) => {
  const housings = await Housing.find({}).populate("cong_dan").populate("nha").sort({id_cong_dan: 1})

  res.status(200).json(housings)
}

// get one cong_dan
const getCong_dan = async (req, res) => {
  const { id } = req.params

  const housing = await Housing.find({id_cong_dan : id}).populate("cong_dan").populate("nha")

  if (!housing.length) {
    return res.status(404).json({error: 'Công dân không tồn tại.'})
  }

  res.status(200).json(housing)
}

// get one cong_dan
const getCong_danbyCCCD = async (req, res) => {
  const { cccd } = req.params

  const cong_dan = await Cong_dan.find({CCCD : cccd}).lean()

  if (!cong_dan.length) {
    return res.status(404).json({error: 'Công dân không tồn tại.'})
  }

  const housing = await Housing.find({id_cong_dan : cong_dan[0].id_cong_dan}).populate("cong_dan").populate("nha")

  if (!housing.length) {
    return res.status(404).json({error: 'Công dân không tồn tại.'})
  }

  res.status(200).json(housing)
}

// get all ho_khau
const getHo_khaus = async (req, res) => {
  const housings = await Housing.find({la_chu_ho: true}).populate("cong_dan").populate("nha").sort({id_nha: 1})

  res.status(200).json(housings)
}

// get one ho_khau
const getHo_khau_Chu_ho = async (req, res) => {
  const { id } = req.params

  const housing = await Housing.find({la_chu_ho: true, id_nha : id}).populate("cong_dan").populate("nha")

  if (!housing.length) {
    return res.status(404).json({error: 'Hộ khẩu không tồn tại.'})
  }

  res.status(200).json(housing)
}



// get one ho_khau
const getHo_khau_Thanh_vien = async (req, res) => {
  const { id } = req.params

  const housing = await Housing.find({la_chu_ho: false, id_nha : id}).populate("cong_dan").populate("nha")

  if (!housing.length) {
    return res.status(404).json({error: 'Hộ khẩu không tồn tại.'})
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

  const ho_khau = await Ho_khau.find({id_nha: id})

  if (!ho_khau.length) {
    return res.status(400).json({error: 'Hộ khẩu không tồn tại.'})
  }

  const { chuho_id, members } = req.body

  await Housing.deleteMany({id_nha: id})

  try {
    await Housing.create({id_nha: id, id_cong_dan: chuho_id, la_chu_ho: true, trang_thai_cu_tru: 1})
    members.forEach(async thanh_vien => {
      await Housing.create({id_nha: id, id_cong_dan: thanh_vien.id, la_chu_ho: false, trang_thai_cu_tru: 1, quan_he_chu_ho: thanh_vien.role})
    })
    res.status(200).json({msg: 'OK!'})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  getHo_khau_Chu_ho,
  getHo_khau_Thanh_vien,
  getCong_dan,
  getCong_danbyCCCD,
  getHo_khaus,
  getCong_dans,
  createHousing,
  deleteHousing,
  updateHousing
}
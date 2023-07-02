const Ho_khau = require('../models/Model')

// get all ho_khau
const getHo_khaus = async (req, res) => {
  const ho_khaus = await Ho_khau.find({}).sort({id_nha: 1})

  res.status(200).json(ho_khaus)
}

// get one ho_khau
const getHo_khau = async (req, res) => {
  const { id } = req.params

  const ho_khau = await Ho_khau.find({id_nha : id})

  if (!ho_khau.length) {
    return res.status(404).json({error: 'Hộ khẩu không tồn tại.'})
  }

  res.status(200).json(ho_khau)
}

// create new ho_khau
const createHo_khau = async (req, res) => {
  const {id_nha, dia_chi} = req.body;

  // add doc to db
  try {
    const ho_khau = await Ho_khau.create({id_nha, dia_chi})
    res.status(200).json(ho_khau);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

// delete ho_khau
const deleteHo_khau = async (req, res) => {
  const { id } = req.params

  const cong_dan = await Ho_khau.findOneAndDelete({id_nha : id})

  if (!cong_dan) {
    return res.status(400).json({error: 'Hộ khẩu không tồn tại.'})
  }

  res.status(200).json(cong_dan)
}

// update ho_khau
const updateHo_khau = async (req, res) => {
  const { id } = req.params

  const ho_khau = await Ho_khau.findOneAndUpdate({id_nha : id}, {
    ...req.body
  })

  if (!ho_khau) {
    return res.status(400).json({error: 'Hộ khẩu không tồn tại.'})
  }

  res.status(200).json(ho_khau)
}

module.exports = {
  getHo_khaus,
  getHo_khau,
  createHo_khau,
  deleteHo_khau,
  updateHo_khau
}
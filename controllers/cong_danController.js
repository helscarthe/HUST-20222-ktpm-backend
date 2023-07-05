const Cong_dan = require('../models/cong_danModel')

// get all cong_dan
const getCong_dans_withHousinginfo = async (req, res) => {
  const cong_dans = await Cong_dan.find({}).populate("info_ho_khau").sort({id_cong_dan: 1})

  res.status(200).json(cong_dans)
}

// get all cong_dan
const getCong_dans = async (req, res) => {
  const cong_dans = await Cong_dan.find({}).sort({id_cong_dan: 1})

  res.status(200).json(cong_dans)
}

// get one cong_dan
const getCong_dan = async (req, res) => {
  const { id } = req.params

  const cong_dan = await Cong_dan.find({id_cong_dan : id})

  if (!cong_dan.length) {
    return res.status(404).json({error: 'Công dân không tồn tại.'})
  }

  res.status(200).json(cong_dan)
}

// create new cong_dan
const createCong_dan = async (req, res) => {
  const {id_cong_dan, ho_ten, ho_ten_khac, ngay_sinh, CCCD, dan_toc, gioi_tinh, quoc_tich, nghe_nghiep} = req.body;

  // add doc to db
  try {
    const cong_dan = await Cong_dan.create({id_cong_dan, ho_ten, ho_ten_khac, ngay_sinh, CCCD, dan_toc, gioi_tinh, quoc_tich, nghe_nghiep})
    res.status(200).json(cong_dan);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

// delete cong_dan
const deleteCong_dan = async (req, res) => {
  const { id } = req.params

  const cong_dan = await Cong_dan.findOneAndDelete({id_cong_dan : id})

  if (!cong_dan) {
    return res.status(400).json({error: 'Công dân không tồn tại.'})
  }

  res.status(200).json(cong_dan)
}

// update cong_dan
const updateCong_dan = async (req, res) => {
  const { id } = req.params

  const cong_dan = await Cong_dan.findOneAndUpdate({id_cong_dan : id}, {
    ...req.body
  })

  if (!cong_dan) {
    return res.status(400).json({error: 'Công dân không tồn tại.'})
  }

  res.status(200).json(cong_dan)
}

module.exports = {
  getCong_dans_withHousinginfo,
  getCong_dans,
  getCong_dan,
  createCong_dan,
  deleteCong_dan,
  updateCong_dan
}
const InfoCOVID = require('../models/infoPersonalModel')

// get all cong_dan
const getInfos = async (req, res) => {
  const infos = await InfoCOVID.find({}).populate("cong_dan").sort({id_cong_dan: 1})

  res.status(200).json(infos)
}

// get one cong_dan
const getInfo = async (req, res) => {
  const { id } = req.params

  const info = await InfoCOVID.find({id_cong_dan : id}).populate("cong_dan")

  if (!info.length) {
    return res.status(404).json({error: 'Công dân không tồn tại.'})
  }

  res.status(200).json(info)
}

module.exports = {
  getInfos,
  getInfo
}
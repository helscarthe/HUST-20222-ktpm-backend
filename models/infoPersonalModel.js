const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cong_dan_Schema = new Schema({
  id_cong_dan: {
    type: Number,
    required: true,
    unique: true
  },
  ho_ten: {
    type: String,
    required: true
  },
  ho_ten_khac: {
    type: String,
    required: true
  },
  ngay_sinh: {
    type: Date,
    required: true
  },
  CCCD: {
    type: String,
    required: true
  },
  dan_toc: {
    type: String,
    required: true
  },
  gioi_tinh: {
    type: String,
    required: true
  },
  quoc_tich: {
    type: String,
    required: true
  },
  nghe_nghiep: {
    type: String,
    required: true
  },
  infoCovid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'info_ca_nhan'
  }
}, {
  collection: 'cong_dan',
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
})

const infoCOVIDSchema = new Schema({
  id_cong_dan: {
    type: Number,
    required: true,
    unique: true
  },
  thuoc_dien: {
    type: Number,
    required: true
  },
  co_bao_hiem_y_te: {
    type: Boolean,
    required: true
  }
}, {
  collection: 'info_ca_nhan',
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
})

const dbNK = mongoose.connection.useDb("nhan_khau")

const Cong_dan = dbNK.model('cong_dan', cong_dan_Schema)

infoCOVIDSchema.virtual('cong_dan', {
  ref: Cong_dan,
  localField: 'id_cong_dan',
  foreignField: 'id_cong_dan'
})
const dbCV = mongoose.connection.useDb("Covid-19")

module.exports = dbCV.model('info_ca_nhan', infoCOVIDSchema)
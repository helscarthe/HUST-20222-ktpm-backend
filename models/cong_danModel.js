const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cong_dan_Schema = new Schema({
  id_cong_dan: {
    type: Number,
    required: true,
    unique: true
  },
  id_nha: {
    type: Number,
    required: false
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
  }
}, {collection: 'cong_dan'})

module.exports = mongoose.model('cong_dan', cong_dan_Schema)
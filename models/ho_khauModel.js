const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ho_khau_Schema = new Schema({
  id_nha: {
    type: Number,
    required: true,
    unique: true
  },
  dia_chi: {
    type: String,
    required: true
  },
  info_thanh_vien: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'info_nhan_khau'
  }
}, {
  collection: 'ho_khau',
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
})

const db = mongoose.connection.useDb("nhan_khau")

module.exports = db.model('ho_khau', ho_khau_Schema)
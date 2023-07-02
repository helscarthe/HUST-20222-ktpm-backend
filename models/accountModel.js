const mongoose = require('mongoose')

const Schema = mongoose.Schema

const account_Schema = new Schema({
  tai_khoan: {
    type: String,
    required: true,
    unique: true
  },
  mat_khau: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  }
}, {collection: 'dang_nhap'})

const db = mongoose.connection.useDb("nhan_khau")

module.exports = db.model('dang_nhap', account_Schema)
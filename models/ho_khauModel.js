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
  }
}, {collection: 'ho_khau'})

const db = mongoose.connection.useDb("nhan_khau")

module.exports = db.model('ho_khau', ho_khau_Schema)
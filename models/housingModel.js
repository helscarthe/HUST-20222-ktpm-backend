const mongoose = require('mongoose')

const Schema = mongoose.Schema

const housing_Schema = new Schema({
  id_nha: {
    type: Number,
    required: true,
    unique: true
  },
  id_cong_dan: {
    type: Number,
    required: true
  },
  la_chu_ho: {
    type: Boolean,
    required: true
  },
  trang_thai_cu_tru: {
    type: Number,
    required: true
  },
  quan_he_chu_ho: {
    type: String,
    required: true
  },
  bat_dau_tam_tru_vang: {
    type: Date,
    required: true
  },
  ket_thuc_tam_tru_vang: {
    type: Date,
    required: true
  }
}, {
  collection: 'info_nhan_khau',
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
})

housing_Schema.virtual('cong_dan', {
  ref: 'cong_dan',
  localField: 'id_cong_dan',
  foreignField: 'id_cong_dan'
});

housing_Schema.virtual('nha', {
  ref: 'ho_khau',
  localField: 'id_nha',
  foreignField: 'id_nha'
});

const db = mongoose.connection.useDb("nhan_khau")

module.exports = db.model('info_nhan_khau', housing_Schema)
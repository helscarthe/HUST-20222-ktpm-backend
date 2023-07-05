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
  dia_chi: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'info_nhan_khau'
  }
}, {
  collection: 'cong_dan',
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
})

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
    required: false
  },
  bat_dau_tam_tru_vang: {
    type: Date,
    required: false
  },
  ket_thuc_tam_tru_vang: {
    type: Date,
    required: false
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

const Cong_dan = db.model('cong_dan', cong_dan_Schema)
const Ho_khau = db.model('ho_khau', ho_khau_Schema)

module.exports = db.model('info_nhan_khau', housing_Schema)
const Account = require('../models/accountModel')

// log in
const logIn = async (req, res) => {
  const {tai_khoan, mat_khau} = req.body;

  const account = await Account.find({tai_khoan: tai_khoan}).lean()

  if (!account.length) {
    return res.status(404).json({error: 'Tài khoản không tồn tại.'})
  }

  if (account[0].mat_khau != mat_khau) {
    return res.status(400).json({error: 'Sai mật khẩu.'})
  }

  res.status(200).json({level: account[0].level})

}

module.exports = {
  logIn
}
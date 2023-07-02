require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const nhan_khau_Routes = require('./routes/nhan_khau')

// make the app
const app = express()

// middleware
// log post body
app.use(express.json())

// log requests sent
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/nhan_khau', nhan_khau_Routes)

// connect to db
mongoose.connect(process.env.MONGO_NK_URI, {autoIndex: true})
  .then(() => {
    // listen for requests
    mongoose.connection.syncIndexes().then(() => {
      app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port', process.env.PORT)
      })
    })
  })
  .catch((error) => {
    console.log(error)
  })
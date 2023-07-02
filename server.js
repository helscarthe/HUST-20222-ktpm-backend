require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cong_dan_Routes = require('./routes/cong_dan')
const ho_khau_Routes = require('./routes/ho_khau')
const account_Routes = require('./routes/account')
const cors = require('cors')

// make the app
const app = express()

// middleware
// log post body
app.use(express.json())
app.use(cors());

// log requests sent
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/cong_dan', cong_dan_Routes)
app.use('/api/ho_khau', ho_khau_Routes)
app.use('/login', account_Routes)

// connect to db
mongoose.connect(process.env.MONGO_URI, {autoIndex: true})
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
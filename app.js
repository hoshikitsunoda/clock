const express = require('express')
const timezones = require('./routes/timezones')
const { MongoClient } = require('mongodb')
const app = express()

MongoClient.connect('mongodb://localhost/clock', (error, db) => {
  app.use(express.static('./public'))
  app.use('/timezones', timezones(db.collection('timezones')))

  app.listen(8080)
})

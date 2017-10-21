const express = require('express')
const timezones = require('./routes/timezones')
const app = express()

app.use(express.static('./public'))
app.use('/timezones', timezones)

app.listen(8080)

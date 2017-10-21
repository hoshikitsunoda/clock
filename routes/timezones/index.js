const { Router } = require('express')

const timezones = new Router()

timezones.get('/', (req, res) => {
  res.send([
    'Asia/Tokyo',
    'Asia/Dubai',
    'Europe/Istanbul',
    'Europe/Stockholm',
    'America/Sao_Paulo',
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'Pacific/Guam'
  ])
})

module.exports = timezones

const { Router } = require('express')

module.exports = collection => {
  const timezones = new Router()

  timezones.get('/', (req, res) => {
    collection
      .find({}, { _id: 0 })
      .toArray()
      .then(result =>
        res.send(
          result.reduce((zones, document) => [...zones, document.zone], [])
        )
      )
  })

  return timezones
}

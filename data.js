const { MongoClient } = require('mongodb')
const url = 'mongdb://localhost/clock'

module.exports = MongoClient.connect(url)

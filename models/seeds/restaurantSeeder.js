//const mongoose = require("mongoose")
const db = require('../../config/mongoose')
const restaurantList = require('../../restaurant.json') //載入restaurant的json file
const Restaurant = require('../restaurant') // 載入 restaurant model

db.once('open', () => {
  Restaurant.create(restaurantList.results)

  console.log('Done!')
})

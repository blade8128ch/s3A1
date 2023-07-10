//const mongoose = require("mongoose")
const db = require('../../config/mongoose')
const restaurantList = require('../../restaurant.json') //載入restaurant的json file
const Restaurant = require('../restaurant') // 載入 restaurant model

db.once('open', () => {
  for (let i = 0; i < 8; i++) {
    Restaurant.create({
      name: restaurantList.results[i].name,
      category: restaurantList.results[i].category,
      image: restaurantList.results[i].image,
      location: restaurantList.results[i].location,
      phone: restaurantList.results[i].phone,
      google_map: restaurantList.results[i].google_map,
      rating: restaurantList.results[i].rating,
      description: restaurantList.results[i].description,
    })
  }
  console.log('Done!')
})

const express = require('express')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const routes = require('./routes')
require('./config/mongoose')
const app = express()

const port = 3000

const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const restaurantList = require('./restaurant.json')
const Restaurant = require('./models/restaurant') // 載入 Restaurant model

// setting template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
// setting static files
app.use(express.static('public'))

app.use(methodOverride('_method'))
app.use(routes)

app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  return Restaurant.find({
    name: { $regex: keyword, $options: 'xi' },
  })
    .lean()
    .then(restaurants => {
      res.render('index', { restaurants: restaurants, keyword: keyword })
    })
    .catch(error => console.log(error))
})

// Start and listen the server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})

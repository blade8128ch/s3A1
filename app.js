const express = require('express')
const session = require('express-session')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const routes = require('./routes')
const usePassport = require('./config/passport')
require('./config/mongoose')
const app = express()

const port = 3000

const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(
  session({
    secret: 'ThisIsMySecret',
    resave: false,
    saveUninitialized: true,
  })
)

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use(methodOverride('_method'))
usePassport(app)
app.use(routes)

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})

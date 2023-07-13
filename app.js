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
const flash = require('connect-flash')

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
app.use(flash())
app.use((req, res, next) => {
  // 你可以在這裡 console.log(req.user) 等資訊來觀察
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg') // 設定 success_msg 訊息
  res.locals.warning_msg = req.flash('warning_msg') // 設定 warning_msg 訊息
  next()
})

app.use(routes)

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})

const express = require('express')
const exphbs  = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// 載入餐廳資料
const restaurantList = require('./public/json/restaurants.json').results

// 設定樣板引擎
app.engine('hbs', exphbs.engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')

// 設定靜態檔案
app.use(express.static('public'))

// 設定 body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// 設定路由
app.use('/', require('./routes/index'))
app.use('/restaurants', require('./routes/restaurants'))

// 啟動伺服器
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})

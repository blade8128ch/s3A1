// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')
// 定義首頁路由
router.get('/', (req, res) => {
  const userId = req.user._id
  Restaurant.find({ userId: userId }) // 取出  model 裡的所有資料
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .sort({ _id: 'asc' })
    .then(restaurants => res.render('index', { restaurants })) // 將資料傳給 index 樣板
    .catch(error => console.error(error)) // 錯誤處理
})

router.get('/search', (req, res) => {
  if (!req.query.keyword) {
    return res.redirect('/')
  }
  const keyword = req.query.keyword

  console.log(req.query)
  return Restaurant.find({
    $or: [
      { name: { $regex: keyword, $options: 'xi' } },
      { category: { $regex: keyword, $options: 'xi' } },
    ],
  })
    .lean()
    .then(restaurants => {
      res.render('index', { restaurants: restaurants, keyword: keyword })
    })
    .catch(error => console.log(error))
})
// 匯出路由模組
module.exports = router

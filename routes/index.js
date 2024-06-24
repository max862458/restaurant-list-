const express = require('express')
const router = express.Router()
const restaurantList = require('../public/json/restaurants.json').results

// 首頁路由
router.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList })
})

// 搜尋路由
router.get('/search', (req, res) => {
  const keyword = req.query.keyword.trim().toLowerCase()
  const filteredRestaurants = restaurantList.filter(restaurant => 
    restaurant.name.toLowerCase().includes(keyword) || 
    restaurant.category.toLowerCase().includes(keyword)
  )
  res.render('index', { restaurants: filteredRestaurants, keyword: req.query.keyword })
})

module.exports = router

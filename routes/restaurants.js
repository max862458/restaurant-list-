const express = require('express')
const router = express.Router()
const restaurantList = require('../public/json/restaurants.json').results

// 餐廳詳細資訊路由
router.get('/:id', (req, res) => {
  const restaurant = restaurantList.find(restaurant => restaurant.id === Number(req.params.id))
  if (restaurant) {
    res.render('restaurantDetails', restaurant)
  } else {
    res.status(404).send('Restaurant not found')
  }
})

module.exports = router

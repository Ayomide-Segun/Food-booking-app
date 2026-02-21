const express = require('express');
const router = express.Router();
const {addRestaurants, getRestaurants, updateRestaurants} = require('../Controller/RestaurantsController');

router.post('/restaurants', addRestaurants);
router.get('/allRestaurants', getRestaurants);
router.patch('/restaurants/:id', updateRestaurants);

module.exports = router;
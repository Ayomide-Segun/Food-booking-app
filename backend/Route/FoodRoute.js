const express = require('express');
const router = express.Router();
const {getFoods, addFood, deleteFoods, updateFoods} = require('../Controller/FoodController');

router.get('/allFoods', getFoods);
router.post('/foods', addFood);
router.delete('/foods/:id', deleteFoods);
router.patch('/foods/:id', updateFoods);

module.exports = router;

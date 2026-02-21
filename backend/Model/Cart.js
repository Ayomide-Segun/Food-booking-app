const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    restaurant: String,
    food: String,
    price: Number,
    amount: Number
});

module.exports = mongoose.model("Cart", cartSchema);
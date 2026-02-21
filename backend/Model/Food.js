const mongoose = require('mongoose');
const foodSchema = new mongoose.Schema({
    name: String,
    type: String,
    image: String,
    price: String,
    cookTime: String
});

module.exports = mongoose.model("Foods", foodSchema);
const mongoose = require('mongoose');
const restaurantsSchema = new mongoose.Schema({
    name: String,
    image: String,
    rating: Number,
    meals: [String],
    soups: [String],
    swallows: [String],
    proteins: [String],
    drinks: [String],
    others: [String],
    cookDuration: String
});

module.exports = mongoose.model("Restaurants", restaurantsSchema);
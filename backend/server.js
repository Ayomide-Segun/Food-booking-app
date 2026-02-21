const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./Route/UserRoute');
const restaurantRoutes = require('./Route/RestaurantRoute');
const foodRoutes = require('./Route/FoodRoute');
const cartRoutes = require('./Route/CartRoute');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', restaurantRoutes);
app.use('/api', foodRoutes);
app.use('/api', cartRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error("Mongo error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(
    `Server running on ${PORT}`))

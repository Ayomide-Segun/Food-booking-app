const Restaurants = require('../Model/Restaurant');

exports.addRestaurants = async(req, res) => {
    const {name, image, rating, meals, soup, swallows, proteins, drinks, others, cookDuration} = req.body;
    try{
        const restaurant = await Restaurants.create({
            name,
            image,
            rating,
            meals,
            soup,
            swallows,
            proteins,
            drinks,
            others,
            cookDuration
        })
        res.status(201).json(restaurant)
    } catch (error) {
        res.status(500).json({
            message: 'Server error'
        })
    }
}

exports.getRestaurants = async(req, res) => {
    try{
        const restaurants = await Restaurants.find()
    res.status(201).json(restaurants)
    } catch(error){
        re.status(500).json({
            message: 'Error fetching retaurants.'
        })
    }  
}

exports.updateRestaurants = async(req, res) => {
    const { id } = req.params;
    await Restaurants.findByIdAndUpdate(id, req.body, {new:true})
    res.status(200).json({message: "updated"})
}

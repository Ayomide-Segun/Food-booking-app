const Foods = require('../Model/Food')

exports.addFood = async(req, res) => {
    const {name, type, image, price, cookTime} = req.body;
    try{
        const food = await Foods.create({
            name,
            type,
            image,
            price,
            cookTime
        })
        res.status(201).json(food)
    }catch (error){
        re.status(500).json({
            message: 'Server error!'
        })
    }
}

exports.getFoods = async(req, res) => {
    try{
        const food = await Foods.find()
        res.status(201).json(food)
    } catch(error){
        res.status(500).json({
            message: 'Error fetching foods.'
        })
    }
}

exports.deleteFoods = async(req, res) => {
    const { id } = req.params;
    await Foods.findByIdAndDelete(id)
    res.status(204).send()
}

exports.updateFoods = async(req, res) => {
    const { id } = req.params;
    await Foods.findByIdAndUpdate(id, req.body, {new:true})
    res.status(200).json({message: "updated"})
}
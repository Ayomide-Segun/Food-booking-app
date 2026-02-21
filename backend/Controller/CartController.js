const Cart = require("../Model/Cart");

exports.cart = async(req, res) => {
    const {restaurant, food, price, amount} = req.body;
    try{
        const cart = await Cart.create({
            restaurant,
            food,
            price,
            amount
        });
        res.status(201).json(cart)
    } catch(error){
        res.status(500).json({
            message: "Failed to add to cart"
        });
    } ;
}

exports.getCartItems = async(req, res) => {
    try{
        const cart = await Cart.find()
        res.status(200).json(cart)
    } catch(error){
        res.status(500).json({
            message: 'Error fetching cart items.'
        })
    }
}

exports.deleteCartItem = async(req, res) => {
    const {id} = req.params;
    try{
        const cart = await Cart.findByIdAndDelete(id);
        res.status(201).json({
            message: "Cart item successfully deleted"
        });
    }catch(error){
        res.status(500).json({
            message: "Unable to delete item from cart."
        });
    }
}

exports.updateCartItem = async(req, res) => {
    const {id} = req.params;
    try{
        const cart = await Cart.findByIdAndUpdate(id, req.body);
        res.status(201).json(cart);
    }catch(error){
        res.status(500).json({
            message: "Unable to update cart item."
        });
    }
}
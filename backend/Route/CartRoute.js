const express = require('express');
const router = express.Router();
const {cart, getCartItems, deleteCartItem, updateCartItem} = require("../Controller/CartController");

router.post("/cart", cart);
router.get("/allItems", getCartItems);
router.delete("/deleteCartItem/:id", deleteCartItem);
router.patch("/updateCartItem/:id", updateCartItem);

module.exports = router;
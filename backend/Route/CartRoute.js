const express = require('express');
const router = express.Router();
const {cart, getCartItems, deleteCartItem, updateCartItem} = require("../Controller/CartController");
const protect = require("../Middleware/authMiddleWare")

router.post("/cart", protect, cart);
router.get("/allItems", getCartItems);
router.delete("/deleteCartItem/:id", protect, deleteCartItem);
router.patch("/updateCartItem/:id", protect, updateCartItem);

module.exports = router;
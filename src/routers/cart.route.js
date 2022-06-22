const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cart.controller');

router.get('/:id', cartController.getCartByIDUser);
router.post('/', cartController.createCart);
router.put('/', cartController.modifyCart);
router.get('/', cartController.getCart);
router.post('/delete/', cartController.removeCart);
router.delete('/idProduct/:id', cartController.removeCartByIDProduct);
router.delete('/idUser/:id', cartController.removeCartByIDUser);

module.exports = router;
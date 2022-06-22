const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');

router.get('/', productController.getProductList);
router.get('/:id', productController.getProductByID);
router.post('/',productController.createProduct);
router.put('/:id',productController.modifyProduct);
router.delete('/:id',productController.RemoveProduct);
module.exports = router;
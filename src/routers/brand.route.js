const express = require('express');
const router = express.Router();

const brandController = require('../controllers/brand.controller');

router.get('/', brandController.getBrandList);
router.get('/:id', brandController.getBrandByID);
router.post('/', brandController.createBrand);

module.exports = router;

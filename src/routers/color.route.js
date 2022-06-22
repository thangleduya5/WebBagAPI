const express = require('express');
const router = express.Router();

const colorController = require('../controllers/color.controller');

router.get('/:id', colorController.getColorByID);
router.get('/', colorController.getAllColor);

module.exports = router;
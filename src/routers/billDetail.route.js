const express = require('express');
const router = express.Router();

const billDetailController = require('../controllers/billDetail.controller');

router.get('/:id', billDetailController.getBillDetailByIDBill);
router.get('/id_product/:id', billDetailController.getBillDetailByIDProduct);
router.post('/', billDetailController.createBillDetail);
router.put('/', billDetailController.addComment);

module.exports = router;
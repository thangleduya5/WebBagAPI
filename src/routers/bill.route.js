const express = require('express');
const router = express.Router();

const billController = require('../controllers/bill.controller');

router.get('/', billController.getBillList);
router.get('/status_bill/:status', billController.getBillStatus);
router.get('/id_bill', billController.getIdBill);
router.get('/year_bill', billController.getYearBill);
router.get('/id_user/:id', billController.getBillByIDUser);
router.post('/', billController.createBill);
router.get('/statistic_revenue/:year', billController.getRevenueByYear);
router.put('/:idBill', billController.confirmBill);

module.exports = router;
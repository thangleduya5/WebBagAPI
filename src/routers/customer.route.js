const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer.controller');

router.get('/', customerController.getCustomerList);
router.get('/status/:status', customerController.getCustomerStatus);
router.get('/:id', customerController.getCustomerByID);
router.post('/',customerController.createCustomer);
router.put('/info/:id',customerController.modifyCustomer);
router.delete('/:id',customerController.removeCustomer);
router.post('/login', customerController.checkLogin);
router.get('/username/:username', customerController.checkUsernameExist);
router.put('/change_pass', customerController.changePass);
router.put('/block/:idUser', customerController.block);
router.put('/unblock/:idUser', customerController.unBlock);
module.exports = router;
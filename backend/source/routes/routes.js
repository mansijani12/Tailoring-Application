var express = require('express');

var customerController = require('src/customer/customerController');
const router = express.router();

router.route('customer/login').post(customerController.loginCustomercontrollerFn);
router.route('customer/create').post(customerController.createCustomercontrollerFn);



module.exports = router;
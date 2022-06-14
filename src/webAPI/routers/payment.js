var express = require('express');
var router = express.Router();
const paymentController = require('../controllers/payment.controller');
const authenticate = require('../../authenticate');

router.post('/', authenticate.verifyUser, paymentController.create);
router.get('/', authenticate.verifyUser, paymentController.findAll);
module.exports = router;

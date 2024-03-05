import express from 'express';
const { processPayment, sendStripeApi } = require('../Controllers/paymentController.js');
const { isAdmin } = require('../middleware/authMiddleware.js');
const router = express.Router();

router.route('/payment/process').post( isAdmin, processPayment);
router.route('/stripeapi').get( isAdmin, sendStripeApi);


module.exports = router;
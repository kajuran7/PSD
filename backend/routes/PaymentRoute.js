import express from 'express';
import { getpay, processPayment } from '../Controllers/PaymentController.js';

const router = express.Router();

// Endpoint for processing payments
router.post('/payment', processPayment);
router.get("/get",getpay)

export default router;

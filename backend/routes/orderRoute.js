import express from 'express';
import { isAdmin,protect,} from '../middleware/authMiddleware.js';
import { createorder,getOrderById } from '../Controllers/orderController.js';
const router = express.Router();
router.post('/createorder', createorder);
router.get('/:id',isAdmin,protect,getOrderById);






export default router;
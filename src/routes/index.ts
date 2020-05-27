import { Router } from 'express';
import UserRouter from './Users';
import DishRouter from './Dishes';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/dishes', DishRouter);

// Export the base-router
export default router;

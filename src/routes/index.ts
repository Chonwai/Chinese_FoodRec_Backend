import { Router } from 'express';
import UserRouter from './Users';
import DishRouter from './Dishes';
import ChineseCuisineRouter from './ChineseCuisines';
import IngredientRouter from './Ingredients';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/dishes', DishRouter);
router.use('/chinese/cuisines', ChineseCuisineRouter);
router.use('/ingredients', IngredientRouter);

// Export the base-router
export default router;

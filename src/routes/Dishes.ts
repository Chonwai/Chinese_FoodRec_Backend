import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';

import { paramMissingError } from '@shared/constants';
import DishDao from '@daos/Dish/DishDao';

// Init shared
const router = Router();
const dishDao = new DishDao();

/******************************************************************************
 *                      Get All Dishes - "GET /api/dishes/all"
 ******************************************************************************/

router.get('/all', async (req: Request, res: Response) => {
    const dishes = await dishDao.getAll();
    return res.status(OK).json({ dishes });
});

/******************************************************************************
 *                      Get Specify Dish By ID - "GET /api/dishes/:id"
 ******************************************************************************/

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params as ParamsDictionary;
    const dishes = await dishDao.getOne(id);
    return res.status(OK).json({ dishes });
});

/******************************************************************************
 *                      Get Specify Dish By Name - "GET /api/dishes/:name"
 ******************************************************************************/

router.get('/name/:name', async (req: Request, res: Response) => {
    const { name } = req.params as ParamsDictionary;
    const dishes = await dishDao.getOneByName(decodeURIComponent(name));
    return res.status(OK).json({ dishes });
});

/******************************************************************************
 *                      Get Specify Dish By Ingredient - "GET /api/dishes/:ingredient"
 ******************************************************************************/

router.get('/ingredient/:ingredient', async (req: Request, res: Response) => {
    const { ingredient } = req.params as ParamsDictionary;
    const dishes = await dishDao.getOneByIngredient(decodeURIComponent(ingredient));
    return res.status(OK).json({ dishes });
});

/******************************************************************************
 *                      Get Specify Dishes By Filter - "GET /api/dishes?"
 ******************************************************************************/

router.get('/', async (req: Request, res: Response) => {
    const ingredient = await String(req.query.ingredient);
    const chinese_cuisine = await String(req.query.chinese_cuisine);
    const taste = await String(req.query.taste);
    const dishes = await dishDao.getSomeByFilter(chinese_cuisine, ingredient, taste);
    return res.status(OK).json({ dishes });
});

export default router;

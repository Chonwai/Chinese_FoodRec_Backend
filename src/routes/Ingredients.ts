import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';

import { paramMissingError } from '@shared/constants';
import IngredientDao from '@daos/Ingredient/IngredientDao';

// Init shared
const router = Router();
const ingredientDao = new IngredientDao();

/******************************************************************************
 *                      Get All Ingredients - "GET /api/ingredients/all"
 ******************************************************************************/

router.get('/all', async (req: Request, res: Response) => {
    const ingredients = await ingredientDao.getAll();
    return res.status(OK).json({ ingredients });
});

/******************************************************************************
 *                      Get Specify Ingredient By ID - "GET /api/ingredients/:id"
 ******************************************************************************/

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params as ParamsDictionary;
    const ingredients = await ingredientDao.getOne(id);
    return res.status(OK).json({ ingredients });
});

/******************************************************************************
 *                      Get Specify Ingredient By Name - "GET /api/ingredients/name/:name"
 ******************************************************************************/

router.get('/name/:name', async (req: Request, res: Response) => {
    const { name } = req.params as ParamsDictionary;
    const ingredients = await ingredientDao.getOneByName(decodeURIComponent(name));
    return res.status(OK).json({ ingredients });
});

export default router;

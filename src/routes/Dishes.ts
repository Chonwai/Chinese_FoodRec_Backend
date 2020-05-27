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
    // const dishes = await dishDao.getAll();
    const dishes = { name: 'Dish A' };
    return res.status(OK).json({ dishes });
});

export default router;

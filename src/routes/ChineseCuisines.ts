import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';

import { paramMissingError } from '@shared/constants';
import ChineseCuisineDao from '@daos/ChineseCuisine/ChineseCuisineDao';

// Init shared
const router = Router();
const chineseCuisineDao = new ChineseCuisineDao();

/******************************************************************************
 *                      Get All Chinese Cuisines - "GET /api/chinese/cuisines/all"
 ******************************************************************************/

router.get('/all', async (req: Request, res: Response) => {
    const cuisines = await chineseCuisineDao.getAll();
    return res.status(OK).json({ cuisines });
});

/******************************************************************************
 *                      Get Specify Chinese Cuisine By ID - "GET /api/chinese/cuisines/:id"
 ******************************************************************************/

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params as ParamsDictionary;
    const cuisine = await chineseCuisineDao.getOne(id);
    return res.status(OK).json({ cuisine });
});

export default router;

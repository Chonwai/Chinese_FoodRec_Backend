import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';

import { paramMissingError } from '@shared/constants';
import TasteDao from '@daos/Taste/TasteDao';

// Init shared
const router = Router();
const tasteDao = new TasteDao();

/******************************************************************************
 *                      Get All Tastes - "GET /api/tastes/all"
 ******************************************************************************/

router.get('/all', async (req: Request, res: Response) => {
    const tastes = await tasteDao.getAll();
    return res.status(OK).json({ tastes });
});

/******************************************************************************
 *                      Get Specify Taste By ID - "GET /api/tastes/:id"
 ******************************************************************************/

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params as ParamsDictionary;
    const taste = await tasteDao.getOne(id);
    return res.status(OK).json({ taste });
});

/******************************************************************************
 *                      Get Specify Taste By Name - "GET /api/tastes/name/:name"
 ******************************************************************************/

router.get('/name/:name', async (req: Request, res: Response) => {
    const { name } = req.params as ParamsDictionary;
    const taste = await tasteDao.getOneByName(name);
    return res.status(OK).json({ taste });
});

export default router;

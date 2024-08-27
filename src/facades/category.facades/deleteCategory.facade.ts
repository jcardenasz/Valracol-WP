import {Request, Response} from 'express';

export const deleteCategoryFacade = async (req: Request, res: Response): Promise<Response> => {
    return res.status(200);
}
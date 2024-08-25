import {Request, Response} from 'express';

export const getAllCategoriesFacade = async (req: Request, res: Response): Promise<Response> => {
    return res.status(200);
}
import {Request, Response} from 'express';

export const getCategoryFacade = async (req: Request, res: Response): Promise<Response> => {
    return res.status(200);
}
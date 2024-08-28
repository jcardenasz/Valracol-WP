import { Request, Response } from 'express';
import db from '../../database';

export const getAllCategoriesFacade = async (req: Request, res: Response): Promise<Response> => {
    try {
        const categories = await db
            .selectFrom('category')
            .selectAll()
            .execute();

        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json({ error: (error as Error).message, message: 'Failed to fetch categories' });
    }
};
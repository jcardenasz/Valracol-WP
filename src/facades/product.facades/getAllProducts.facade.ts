import { Request, Response } from 'express';
import db from '../../database';

export const getAllProductsFacade = async (req: Request, res: Response): Promise<Response> => {
    try {
        const products = await db
            .selectFrom('product')
            .selectAll()
            .execute();

        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ error: (error as Error).message, message: 'Failed to fetch products' });
    }
};
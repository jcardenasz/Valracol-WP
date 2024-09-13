import { Request, Response } from 'express';
import db from '../../database';

export const getProductFacade = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.body;

    try {
        const category = await db
            .selectFrom('product')
            .selectAll()
            .where('product_id', '=', id)
            .executeTakeFirst();

        if (!category) {
            return res.status(404).json({ message: `Product with ID: ${id} not found` });
        }

        return res.status(200).json(category);
    } catch (error) {
        return res.status(500).json({ error: (error as Error).message, message: `Failed to fetch product with ID: ${id}` });
    }
};
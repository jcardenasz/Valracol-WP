import { Request, Response } from 'express';
import db from '../../database';

export const getCategoryFacade = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.body;

    try {
        const category = await db
            .selectFrom('category')
            .selectAll()
            .where('category_id', '=', id)
            .executeTakeFirst();

        if (!category) {
            return res.status(404).json({ message: `Category with ID: ${id} not found` });
        }

        return res.status(200).json(category);
    } catch (error) {
        return res.status(500).json({ error: (error as Error).message, message: `Failed to fetch category with ID: ${id}` });
    }
};
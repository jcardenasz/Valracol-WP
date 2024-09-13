// src/facades/product.facades/getProductsByCategory.facade.ts
import { Request, Response } from 'express';
import db from '../../database';

export const getProductsByCategoryFacade = async (req: Request, res: Response): Promise<Response> => {
    const category_name = req.body.category_name;

    try {
        // Find the category by name
        const category = await db
            .selectFrom('category')
            .selectAll()
            .where('category_name', '=', category_name)
            .executeTakeFirst();

        if (!category || category.category_id === undefined) {
            return res.status(404).json({ message: `Category with name: ${category_name} not found` });
        }

        // Fetch products by category_id
        const products = await db
            .selectFrom('product')
            .selectAll()
            .where('category_id', '=', category.category_id)
            .execute();

        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ error: (error as Error).message, message: 'Failed to fetch products' });
    }
};
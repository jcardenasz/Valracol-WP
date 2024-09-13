import { Request, Response } from 'express';
import db from '../../database';

export const createProductFacade = async (req: Request, res: Response): Promise<Response> => {
    const { user_id, category_id, product_name, product_price, product_brand } = req.body;

    try {
        const [newProduct] = await db
            .insertInto('product')
            .values({ category_id, user_id, product_name, product_price, product_brand })
            .returningAll()
            .execute();

        return res.status(201).json({ newProduct, message: `Product: ${product_name} created successfully` });
    } catch (error) {
        return res.status(500).json({ error: (error as Error).message, message: `Failed to create product: ${product_name}` });
    }
};
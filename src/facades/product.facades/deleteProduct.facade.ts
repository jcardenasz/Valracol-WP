// src/facades/product.facades/deleteProduct.facade.ts
import { Request, Response } from 'express';
import db from '../../database';

export const deleteProductFacade = async (req: Request, res: Response): Promise<Response> => {
    const product_id  = req.body.product_id;

    try {
        await db
            .deleteFrom('product')
            .where('product_id', '=', product_id)
            .execute();

        return res.status(200).json({ message: `Product with ID: ${product_id} deleted successfully` });
    } catch (error) {
        return res.status(500).json({ error: (error as Error).message, message: `Failed to delete product with ID: ${product_id}` });
    }
};
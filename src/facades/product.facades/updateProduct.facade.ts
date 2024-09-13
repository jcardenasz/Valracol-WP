// src/facades/product.facades/updateProduct.facade.ts
import { Request, Response } from 'express';
import db from '../../database';

export const updateProductFacade = async (req: Request, res: Response): Promise<Response> => {
    const { product_id, product_name, product_price, product_brand, category_id } = req.body;

    try {
        const updatedProduct = await db
            .updateTable('product')
            .set({ product_name, product_price, product_brand, category_id })
            .where('product_id', '=', product_id)
            .returningAll()
            .executeTakeFirst();

        if (!updatedProduct) {
            return res.status(404).json({ message: `Product with ID: ${product_id} not found` });
        }

        return res.status(200).json({ updatedProduct, message: `Product with ID: ${product_id} updated successfully` });
    } catch (error) {
        return res.status(500).json({ error: (error as Error).message, message: `Failed to update product with ID: ${product_id}` });
    }
};
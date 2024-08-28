// src/facades/category.facades/updateCategory.facade.ts
import { Request, Response } from 'express';
import db from '../../database';

export const updateCategoryFacade = async (req: Request, res: Response): Promise<Response> => {
    const { category_id, category_name } = req.body;

    try {
        const updatedCategory = await db
            .updateTable('category')
            .set({ category_name })
            .where('category_id', '=', category_id)
            .returningAll()
            .executeTakeFirst();

        if (!updatedCategory) {
            return res.status(404).json({ message: `Category with ID: ${category_id} not found` });
        }

        return res.status(200).json({ updatedCategory, message: `Category with ID: ${category_id} updated successfully` });
    } catch (error) {
        return res.status(500).json({ error: (error as Error).message, message: `Failed to update category with ID: ${category_id}` });
    }
};
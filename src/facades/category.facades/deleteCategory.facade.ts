// src/facades/category.facades/deleteCategory.facade.ts
import { Request, Response } from 'express';
import db from '../../database';

export const deleteCategoryFacade = async (req: Request, res: Response): Promise<Response> => {
    const { name } = req.body;

    try {
        // Find the category_id using the category_name
        const category = await db
            .selectFrom('category')
            .select('category_id')
            .where('category_name', '=', name)
            .executeTakeFirst();

        if (!category) {
            return res.status(404).json({ message: `Category with name: ${name} not found` });
        }

        const { category_id } = category;

        // Delete the category using the category_id
        await db
            .deleteFrom('category')
            .where('category_id', '=', category_id)
            .execute();

        return res.status(200).json({ message: `Category: ${category_id}. ${name} deleted successfully` });
    } catch (error) {
        return res.status(500).json({ error: (error as Error).message, message: `Failed to delete category with name: ${name}` });
    }
};
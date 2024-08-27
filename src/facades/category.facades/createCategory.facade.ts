// src/facades/category.facades/createCategory.facade.ts
import { Request, Response } from 'express';
import db from '../../database';

export const createCategoryFacade = async (req: Request, res: Response): Promise<Response> => {
    const { name } = req.body;
    const category_name = name;
    try {
        const [newCategory] = await db
            .insertInto('category')
            .values({ category_name })
            .returningAll()
            .execute();

        return res.status(201).json({newCategory, message: `Category:${name} successfully`});
    } catch (error) {
        return res.status(500).json({ error: (error as Error).message, message: `Failed to create category: ${name}` });
    }
};
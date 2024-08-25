import {Request, Response} from 'express';
import {getAllCategoriesFacade} from "./category.facades/getAllCategories.facade";
import {getCategoryFacade} from "./category.facades/getCategory.facade";
import {createCategoryFacade} from "./category.facades/createCategory.facade";
import {updateCategoryFacade} from "./category.facades/updateCategory.facade";

class CategoryFacade {

    public async getAllCategories(req: Request, res: Response): Promise<Response> {
        return getAllCategoriesFacade(req, res);
    }

    public async getCategory(req: Request, res: Response): Promise<Response> {
        return getCategoryFacade(req, res);
    }

    public async createCategory(req: Request, res: Response): Promise<Response> {
        return createCategoryFacade(req,res);
    }

    public async updateCategory(req: Request, res: Response): Promise<Response> {
        return updateCategoryFacade(req,res);
    }
}

export default new CategoryFacade();
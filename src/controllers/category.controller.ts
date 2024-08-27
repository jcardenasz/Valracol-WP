import { Request, Response } from 'express';
import categoryFacade from '../facades/category.facade';

class CategoryController {

    public async getAllCategories (req: Request, res: Response):  Promise <Response> {
        return categoryFacade.getAllCategories(req, res);
    }

    public async getCategory (req: Request, res: Response):  Promise <Response> {
        return categoryFacade.getCategory(req, res);
    }

    public async createCategory (req: Request, res: Response):  Promise <Response> {
        return categoryFacade.createCategory(req, res);
    }

    public async updateCategory (req: Request, res: Response):  Promise <Response> {
        return categoryFacade.updateCategory(req, res);
    }

    public async deleteCategory (req: Request, res: Response):  Promise <Response> {
        return categoryFacade.deleteCategory(req, res);
    }

} export default new CategoryController();
import { Request, Response } from 'express';
import productFacade from '../facades/product.facade';

class ProductController {

    public async getAllProducts (req: Request, res: Response):  Promise <Response> {
        return productFacade.getAllProducts(req, res);
    }

    public async getProductsByCategory (req: Request, res: Response):  Promise <Response> {
        return productFacade.getProductsByCategory(req, res);
    }

    public async getProduct (req: Request, res: Response):  Promise <Response> {
        return productFacade.getProduct(req, res);
    }

    public async createProduct (req: Request, res: Response):  Promise <Response> {
        return productFacade.createProduct(req, res);
    }

    public async updateProduct (req: Request, res: Response):  Promise <Response> {
        return productFacade.updateProduct(req, res);
    }

    public async deleteProduct (req: Request, res: Response):  Promise <Response> {
        return productFacade.deleteProduct(req, res);
    }

} export default new ProductController();
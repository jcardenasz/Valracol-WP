import { Request, Response } from 'express';
import { getAllProductsFacade } from './product.facades/getAllProducts.facade';
import { getProductsByCategoryFacade } from './product.facades/getProductsByCategory.facade';
import { getProductFacade } from './product.facades/getProduct.facade';
import { createProductFacade } from './product.facades/createProduct.facade';
import { updateProductFacade } from './product.facades/updateProduct.facade';
import { deleteProductFacade } from './product.facades/deleteProduct.facade';

class ProductFacade {

    public async getAllProducts(req: Request, res: Response): Promise<Response> {
        return getAllProductsFacade(req, res);
    }

    public async getProductsByCategory(req: Request, res: Response): Promise<Response> {
        return getProductsByCategoryFacade(req, res);
    }

    public async getProduct(req: Request, res: Response): Promise<Response> {
        return getProductFacade(req, res);
    }

    public async createProduct(req: Request, res: Response): Promise<Response> {
        return createProductFacade(req, res);
    }

    public async updateProduct(req: Request, res: Response): Promise<Response> {
        return updateProductFacade(req, res);
    }

    public async deleteProduct(req: Request, res: Response): Promise<Response> {
        return deleteProductFacade(req, res);
    }
}

export default new ProductFacade();
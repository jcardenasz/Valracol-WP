import express from "express";
import productController from "../controllers/product.controller";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, This is the product route for Valracol!");
});

router.get('/getAllProducts', productController.getAllProducts);
router.get('/getProductsByCategory', productController.getProductsByCategory);
router.get('/getProduct', productController.getProduct);
router.post('/createProduct', productController.createProduct);
router.put('/updateProduct', productController.updateProduct);
router.delete('/deleteProduct', productController.deleteProduct);

export default router;
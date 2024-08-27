import express from "express";
import categoryController from "../controllers/category.controller";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, This is the category route for Valracol!");
});

router.get('/getAllCategories', categoryController.getAllCategories);
router.get('/getCategory', categoryController.getCategory);
router.post('/createCategory', categoryController.createCategory);
router.put('/updateCategory', categoryController.updateCategory);
router.delete('/deleteCategory', categoryController.deleteCategory);

export default router;
import express from 'express';
import {
    createProduct,
    getProduct,
    showProduct,
    updateProduct,
    deleteProduct
} from '../controllers/productController.js';

const router = express.Router();

// Routes untuk Products
router.get("/", getProduct);
router.post("/", createProduct);
router.get("/:id", showProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
export default router;
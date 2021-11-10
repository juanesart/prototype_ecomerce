import { Router } from "express";
import { 
    createProducts,
    deletProducts,
    getProducts, 
    getProductsById, 
    updateProducts
} from "../controllers/products.controller";
const router = Router();

router.get('/products', getProducts);

router.post('/products', createProducts);

router.put('/products/:id', updateProducts);

router.get('/products/:id', getProductsById);

router.delete('/products/:id', deletProducts);

export default router;
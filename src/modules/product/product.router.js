import { Router } from "express";
import * as productController from './product.controller.js' 

const router = Router()

router.post('/products',productController.addProduct)
router.get('/products',productController.listProduct)
router.put('/products',productController.updateProduct)
router.delete('/products',productController.deleteProduct)
router.get('/productsWithOwnerInfo',productController.getAllProductsWithOwners)
router.get('/productsSorted',productController.sortProducts)

export default router
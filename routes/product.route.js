import express from "express";
import Product from "../modules/product.modules.js";
import {
  productsToGet,
  productToGet,
  CreateProduct,
  updateProduct,
  deleteProduct,
} from "../controller/product.controller.js";
const router = express.Router();

router.get("/", productsToGet);
router.get("/:id", productToGet);
router.post("/", CreateProduct);

// update a product
router.put("/:id", updateProduct);

//  delete a product
router.delete("/:id", deleteProduct);

export default router;

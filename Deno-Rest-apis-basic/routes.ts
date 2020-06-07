// Importing Oak frame-work
import { Router } from "https://deno.land/x/oak/mod.ts";
// Importing the controller methods
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./controllers/products.ts";
// Instance of Router
const router = new Router();

//Creating a Route
router.get("/api/v1/products", getProducts)
  .post("/api/v1/product", addProduct)
  .get("/api/v1/product/:id", getProduct)
  .put("/api/v1/product/:id", updateProduct)
  .delete("/api/v1/product/:id", deleteProduct);

export default router;

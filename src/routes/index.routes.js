import { Router } from "express";
import { getAllProducts, getProductoByName, getCategory } from "../controllers/controllers.js";


const route = Router();

route.get("/", getAllProducts);
route.get("/product", getProductoByName)
route.get("/category", getCategory)






export default route;
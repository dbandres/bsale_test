import { Router } from "express";
import { getRouteById, getProductOrder } from "../controllers/controllers.js";
import { getSearch } from "../search/search.js";

const route = Router();

route.get("/:id", getRouteById);
route.get("/", getProductOrder);




export default route;
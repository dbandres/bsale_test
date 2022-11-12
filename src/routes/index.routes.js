import { Router } from "express";
import { getRoute } from "../controllers/controllers.js";
import { getSearch } from "../search/search.js";

const route = Router();

route.get("/:id", getRoute);
route.get("/", getSearch);




export default route;
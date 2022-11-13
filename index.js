import express from "express";
import IndexRoutes from "./src/routes/index.routes.js";
import cors from "cors";
import { PORT } from "./src/config.js";

const app = express();

app.use(cors());
app.use(IndexRoutes)

app.listen(PORT)
console.log("Server running on port :", PORT)


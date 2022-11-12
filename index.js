import express from "express";
import IndexRoutes from "./src/routes/index.routes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(IndexRoutes)

app.listen(3000)
console.log("Server running")


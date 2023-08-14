import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { mainRoutes, searchRoutes } from "./routes/index.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/tnt-forever");

app.use(mainRoutes);
app.use(searchRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


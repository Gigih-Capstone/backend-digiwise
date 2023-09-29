import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import route from "./src/routes/questionRoute.js";
import { connectDB } from "./src/utils/db.js";

dotenv.config();

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

app.use("/", route);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
  });
});
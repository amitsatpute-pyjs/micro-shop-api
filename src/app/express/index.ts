import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router as orderRouter } from "./routes/orders";
import { router as productRouter } from "./routes/products";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(orderRouter);
app.use(productRouter);

app.listen(port, () => {
  console.log(`API server started at ${port}`);
});

import { Router } from "express";
import products from "./products";

const router = Router();

const baseURL = "/api";
router.use(baseURL, products);

export { router };

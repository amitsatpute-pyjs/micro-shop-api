import { Router } from "express";
import orders from "./orders";

const router = Router();

const baseURL = "/api";
router.use(baseURL, orders);

export { router };
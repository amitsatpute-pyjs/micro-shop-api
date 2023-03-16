import { addNewOrder, deleteOrderById, getOrderById, getOrdersList, updateOrderById } from "../../controllers/orders";
import { Router } from "express";


const router = Router();

router.get("/orders", getOrdersList);
router.post("/addorder", addNewOrder);
router.get("/order/:id", getOrderById);
router.delete("/deleteorder/:id", deleteOrderById);
router.put("/updateorder/:id", updateOrderById);
// router.put("/detailorder/:id", getDetailOrder);

export default router;
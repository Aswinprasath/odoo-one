const express = require("express");
const router = express.Router();

const orderController =
    require("../controllers/orderController");

router.post("/", orderController.createOrder);
router.get("/", orderController.getOrders);
router.put("/:id/send", orderController.sendToKitchen);
router.put("/:id/preparing", orderController.preparingOrder);
router.put("/:id/completed", orderController.completeOrder);
router.put("/:id/pay", orderController.payOrder);
router.get("/dashboard/stats",
    orderController.dashboard);

module.exports = router;
const express = require("express");
const router = express.Router();

const floorController =
require("../controllers/floorController");

router.post("/", floorController.createFloor);
router.get("/", floorController.getFloors);

module.exports = router;
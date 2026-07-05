import express from "express";

import {
  createMarketData,
  getAllMarketData,
  getMarketData,
  updateMarketData,
  deleteMarketData,
} from "../controllers/marketController.js";

const router = express.Router();

router.post("/", createMarketData);
router.get("/", getAllMarketData);
router.get("/:id", getMarketData);
router.put("/:id", updateMarketData);
router.delete("/:id", deleteMarketData);

export default router;



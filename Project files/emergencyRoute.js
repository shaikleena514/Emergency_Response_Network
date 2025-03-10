import express from "express";
import { createEmergency, getAllEmergencies } from "../controllers/emergencyController.js";
import { authMiddleware } from "../middleware/authMiddleware.js"; // ✅ Correct


const router = express.Router();

// Create Emergency Route (Only for Authenticated Users)
router.post("/create", authMiddleware, createEmergency);

// Get All Emergencies
router.get("/all", authMiddleware, getAllEmergencies);

export default router;

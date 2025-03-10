import express from "express";
import { loginUser } from "../controllers/userController.js";

const router = express.Router();

// User Login Route
router.post("/login", loginUser);

export default router;

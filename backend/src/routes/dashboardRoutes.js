import express from "express";
import { getTherapistSessions } from "../controllers/dashboardController.js";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();
router.get("/sessions", authenticateToken, getTherapistSessions);
export default router;


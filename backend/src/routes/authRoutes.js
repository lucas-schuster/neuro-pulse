import express from "express";
import { loginTherapist } from "../controllers/authController.js";

const router = express.Router();
router.post("/login", loginTherapist);
export default router;


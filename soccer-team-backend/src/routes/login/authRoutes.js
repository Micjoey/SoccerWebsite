// authRouter.js
import express from "express";
import { authController } from "./authController.js";

const router = express.Router();

router.post("/login", authController.login); // Login endpoint
router.post("/signup", authController.signup); // Signup endpoint
router.post("/verifyUser", authController.verifyToken); // Verify JWT token

export default router;

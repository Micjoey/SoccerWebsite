// authRouter.js
import express from "express";
import authController from "./authController.js";

const router = express.Router();

router.post("/login", authController.login); // Login endpoint
router.post("/signup", authController.signup); // Signup endpoint

export default router;

import express from "express";
import { createToken } from "../controller/messageController.js";
const router = express.Router();

router.post("/token", createToken);

export default router;

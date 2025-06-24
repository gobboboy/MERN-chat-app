import express from "express";
import { protectRoute } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);

export default router;
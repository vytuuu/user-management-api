import { Router } from "express";
import auth from "./auth/authRoutes";
const router = Router();

router.use("/auth", auth);

export default router;
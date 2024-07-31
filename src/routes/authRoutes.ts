import { Router } from "express";
import { login, register } from "../controllers/authController";
const router = Router();

router.use("/auth/register", register);
router.use("/auth/login", login);

export default router;

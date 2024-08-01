import { Router } from "express";
import auth from "./auth/authRoutes";
import user from "./user/userRoute";
import jwtVerify from "../middlewares/jwtVerify";
const router = Router();

router.use("/auth", auth);
router.use("/user", jwtVerify, user);

export default router;

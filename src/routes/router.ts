import { Router } from "express";
const router = Router();

import createUser from "./users/createUser";
router.use("/users", createUser);

export default router;

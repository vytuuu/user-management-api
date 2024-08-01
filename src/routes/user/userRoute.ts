import { Router } from "express";
import { deleteUser, updatePassword } from "../../controllers/userController";
const router = Router();

router.delete("/delete/:userId", deleteUser);
router.put("/update-password/:userId", updatePassword);

export default router;

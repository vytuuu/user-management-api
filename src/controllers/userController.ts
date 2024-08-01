import { Request, Response } from "express";
import bcrypt from "bcrypt";
import usersModel from "../database/models/users";
import { comparePasswords } from "../utils/validators";

export const updatePassword = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res  
        .status(400)
        .json({ error: "Current and new passwords are required." });
    }

    const user = await usersModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const isPasswordMatch = await comparePasswords(oldPassword, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Current password is incorrect." });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;
    await user.save();

    res.status(200).json({ message: "Password updated successfully." });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ error: "An internal error has occurred." });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const user = await usersModel.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "An internal error has occurred." });
  }
};

import { Router, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = Router();
import usersModel from "../../database/models/users";

const validateUserInput = (name: string, email: string, password: string) => {
  if (!name || !email || !password) {
    return "All fields are required.";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Invalid email format.";
  }
  return null;
};

router.post("/create", async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const validationError = validateUserInput(name, email, password);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const usersSchema = await usersModel.findOne({ email });
    if (usersSchema) {
      return res.send({
        message: "There is already a user with this email address",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await usersModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res.status(201).json({ message: "User created successfully", token });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({
      error: "An internal error has occurred",
    });
  }
});

export default router;

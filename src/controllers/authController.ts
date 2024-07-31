import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import usersModel from "../database/models/users";
import {
  loginValidator,
  registerValidator,
  comparePasswords,
} from "../utils/validators";

const generateToken = (userId: string) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const validationError = registerValidator(name, email, password);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const usersSchema = await usersModel.findOne({ email });
    if (usersSchema) {
      return res.status(409).json({
        message: "There is already a user with this email address",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await usersModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = generateToken(newUser._id.toString());

    res.status(201).json({ message: "User created successfully", token });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      error: "An internal error has occurred",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const validationError = loginValidator(email, password);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const usersSchema = await usersModel.findOne({ email });
    if (!usersSchema) {
      return res
        .status(401)
        .json({ message: "Incorrect username or password" });
    }

    const isPasswordMatch = await comparePasswords(
      password,
      usersSchema.password
    );
    if (!isPasswordMatch) {
      return res
        .status(401)
        .json({ message: "Incorrect username or password" });
    }

    const token = generateToken(usersSchema._id.toString());

    res.status(200).json({ message: "User logged in successfully", token });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({
      error: "An internal error has occurred",
    });
  }
};

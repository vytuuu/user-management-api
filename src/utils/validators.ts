import bcrypt from "bcrypt";

export const loginValidator = (
  email: string,
  password: string
): string | null => {
  if (!email || !password) {
    return "All fields are required.";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Invalid email format.";
  }
  return null;
};

export const registerValidator = (
  name: string,
  email: string,
  password: string
): string | null => {
  if (!name || !email || !password) {
    return "All fields are required.";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Invalid email format.";
  }
  return null;
};

export const comparePasswords = async (
  reqPassword: string,
  dbPassword: string
): Promise<boolean> => {
  const match = await bcrypt.compare(reqPassword, dbPassword);
  return match;
};

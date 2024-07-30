import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

function jwtVerify(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ error: "Token not provided", errorCode: 401 });
  }

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET,
    async (err: Error, decoded: any) => {
      if (err) {
        return res
          .status(403)
          .json({ error: "User not authenticated", errorCode: 403 });
      }

      req.userId = (decoded as JwtPayload).userId;
      next();
    }
  );
}

export default jwtVerify;

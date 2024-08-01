import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

function jwtVerify(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["Authorization"];
  const jwtSecret = process.env.JWT_SECRET;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      error: "Authorization header must be in the format: 'Bearer <token>'",
      errorCode: 401,
    });
  }

  const token = authHeader.split(" ")[1];

  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
  }

  jwt.verify(token, jwtSecret, (err: Error, decoded: any) => {
    if (err) {
      return res.status(403).json({
        error: "User not authenticated",
        errorCode: 403,
      });
    }

    req.userId = (decoded as JwtPayload).userId;
    next();
  });
}

export default jwtVerify;

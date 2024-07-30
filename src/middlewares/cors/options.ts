import { CorsOptionsDelegate } from "cors";

export const corsOptions: CorsOptionsDelegate = (
  origin: any,
  callback: any
) => {
  try {
    const allowedOrigins = JSON.parse(process.env.ALLOWED_URLS || "[]");
    allowedOrigins.push(`http://localhost:${process.env.PORT || 3333}`);

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Forbidden - Access not permitted by: cors"));
    }
  } catch (err) {
    callback(
      new Error("Failed to parse allowed origins from environment variables")
    );
  }
};

import * as dotenv from "dotenv";
import cors from "cors";
import express, { Response, Request } from "express";
import rateLimit from "express-rate-limit";
import { mongoConnect } from "./database/index";
import { corsOptions } from "./middlewares/cors/options";
import routes from "./routes/index";
import { setupSwagger } from "./swagger";
dotenv.config();
mongoConnect();

const app = express();
setupSwagger(app);

app.use(
  cors({
    origin: corsOptions,
    methods: "GET, POST, PUT",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use("/api", routes);

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  message: "Too many requests from this IP, please try again later.",
});
app.use(apiLimiter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Route not found" });
});

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.clear();
  console.log(`Server listening at http://localhost:${port}`);
});

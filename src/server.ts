import * as dotenv from "dotenv";
import routers from "./routes/router";
import cors from "cors";
import express, { Response, Request } from "express";
import rateLimit from "express-rate-limit";
import { mongoConnect } from "./database/index";
import { corsOptions } from "./middlewares/cors/options"; // Verifique se corsOptions é um objeto de configuração
dotenv.config();

// Conectar ao MongoDB
mongoConnect();

const app = express();

// Middleware de CORS
app.use(
  cors({
    origin: corsOptions, // Certifique-se de que corsOptions seja uma string ou array de strings
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware para parsing de JSON
app.use(express.json());

// Rotas
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 Minutes 15 * 60 * 1000,
  max: 1000, // limite de 100 requisições por IP
  message: "Too many requests from this IP, please try again later.",
});
app.use(apiLimiter);
app.use("/", routers);

// Middleware para rota não encontrada
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Route not found" });
});

// Iniciar o servidor
const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.clear();
  console.log(`Server listening at http://localhost:${port}`);
});

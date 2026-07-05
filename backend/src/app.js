import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import marketRoutes from "./routes/marketRoutes.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(compression());

app.use(express.json());
app.use("/api/markets", marketRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "AI Backend Running"
    });
});

export default app;

import express from "express";
import dotenv from "dotenv";

import cors from "cors";

import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongo from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5001;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectToMongo();
  console.log("Server rodando na PORT: " + PORT);
});

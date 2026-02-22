import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongo from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5001;

dotenv.config();

app.use(express.json());

app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
  connectToMongo();
  console.log("Server rodando na PORT: " + PORT);
});

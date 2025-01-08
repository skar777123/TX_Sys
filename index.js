import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import tokenRoutes from "./routes/tokenRoutes.js";
import cors from "cors";


app.use(express.json());
app.use(tokenRoutes);
app.use(cors({
  origin: "http://localhost:3000",
  Access_Control_Allow_Origin: "http://localhost:3000/token",
}))

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database Connected");
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port ",process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

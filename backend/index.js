import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.js";
import temperaturai1Route from "./routes/temperaturai1.js";
import temperaturai2Route from "./routes/temperaturai2.js";
import temperaturai3Route from "./routes/temperaturai3.js";
import humedadi1Route from "./routes/humedadi1.js";
import humedadi2Route from "./routes/humedadi2.js";
import humedadi3Route from "./routes/humedadi3.js";
import co2i1Route from "./routes/co2i1.js";
import co2i2Route from "./routes/co2i2.js";
import co2i3Route from "./routes/co2i3.js";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de bienvenida
app.get("/", (req, res) => {
  res.send("¡Bienvenido a mi aplicación!"); // Puedes cambiar este mensaje a lo que desees
});

// Rutas
app.use("/api/user", userRoute);
app.use("/api/temperaturai1", temperaturai1Route);
app.use("/api/humedadi1", humedadi1Route);
app.use("/api/co2i1", co2i1Route);
app.use("/api/temperaturai2", temperaturai2Route);
app.use("/api/humedadi2", humedadi2Route);
app.use("/api/co2i2", co2i2Route);
app.use("/api/temperaturai3", temperaturai3Route);
app.use("/api/humedadi3", humedadi3Route);
app.use("/api/co2i3", co2i3Route);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  connect();
  console.log(`Connected to backend on port ${port}.`);
});

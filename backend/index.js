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
import co2i1Route from "./routes/co2i2.js";
import co2i1Route from "./routes/co2i3.js";
import temperaturai2Route from "./routes/temperaturai2.js";

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

//middlewares
app.use(cors())
app.use(express.json());
pp.use("/api/user", require("./routes/user"));
app.use("/api/temperaturai1", require("./routes/temperaturai1"));
app.use("/api/humedadi1", require("./routes/humedadi1"));
app.use("/api/co2i1", require("./routes/co2i1"));
app.use("/api/temperaturai2", require("./routes/temperaturai2"));
app.use("/api/humedadi2", require("./routes/humedadi2"));
app.use("/api/co2i2", require("./routes/co2i2"));
app.use("/api/temperaturai3", require("./routes/temperaturai3"));
app.use("/api/humedadi3", require("./routes/humedadi3"));
app.use("/api/co2i3", require("./routes/co2i3"));

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

app.listen(5000, () => {
  connect();
  console.log("Connected to backend.");
});
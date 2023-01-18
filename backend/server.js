import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

import express from "express";
import asyncHandler from "express-async-handler";

import { getViolatedPilots } from "./utils/getViolatedPilots.js";
import { getViolatedDrones } from "./utils/getViolatedDrones.js";
import { fetchDroneData } from "./utils/fetchDroneData.js";
import Info from "./models/infoModel.js";

const app = express();

const saveViolatedPilotInfo = async () => {
  const droneArr = await fetchDroneData();
  const violatedDrones = getViolatedDrones(droneArr);
  await getViolatedPilots(violatedDrones);
};

setInterval(() => saveViolatedPilotInfo(), 2000);

app.get(
  "/violatedInfo",
  asyncHandler(async (req, res) => {
    const violatedInfo = await Info.find({}).sort({ createdAt: -1 });

    res.status(200).json({ status: "success", data: violatedInfo });
  })
);

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! SHUTING DOWN...");
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config();

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful");
  });

const port = process.env.PORT || 5000;

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! SHUTING DOWN...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

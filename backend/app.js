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

export default app;

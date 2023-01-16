import { getViolatedDrones } from "./getViolatedDrones.js";
import { fetchPilotInfo } from "./fetchPilotInfo.js";
import Pilot from "../models/pilotModel.js";

export const getViolatedPilots = async (violatedDronesArr) => {
  Promise.all(
    violatedDronesArr.map((drone) => fetchPilotInfo(drone.serialNumber._text))
  ).then(async (data) => {
    const violatedPilotsData = data;

    await Pilot.create({ pilotInfo: violatedPilotsData });
  });
};

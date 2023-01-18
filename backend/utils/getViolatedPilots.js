import { fetchPilotInfo } from "./fetchPilotInfo.js";
import Info from "../models/infoModel.js";

export const getViolatedPilots = async (violatedDrones) => {
  const violatedDronesUpdate = [];

  if (violatedDrones.length === 0) {
    return;
  } else {
    violatedDrones.forEach(async (drone) => {
      const pilotInfo = await fetchPilotInfo(drone.serialNumber._text);

      violatedDronesUpdate.push({
        droneSerialNumber: drone.serialNumber._text,
        distance: drone.distance,
        pilotName: pilotInfo.name,
        pilotEmail: pilotInfo.email,
        pilotPhoneNumber: pilotInfo.phoneNumber,
        observedAt: Date.now(),
      });

      await Info.create({ info: violatedDronesUpdate });
    });
  }
};

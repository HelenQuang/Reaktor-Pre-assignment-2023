import { fetchDroneData } from "./fetchDroneData.js";
import { calculateDistance } from "./calculateDistance.js";

export const getViolatedDrones = (droneArr) => {
  const violatedDronesArr = droneArr.filter((drone) => {
    return calculateDistance({
      dronePositionX: drone.positionX._text,
      dronePositionY: drone.positionY._text,
    });
  });
  return violatedDronesArr;
};

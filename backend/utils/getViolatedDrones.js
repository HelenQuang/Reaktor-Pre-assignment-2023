import { calculateDistance } from "./calculateDistance.js";

export const getViolatedDrones = (droneArr) => {
  const droneArrUpdate = [];

  droneArr.forEach((drone) => {
    const { distance, isViolated } = calculateDistance(
      drone.positionX._text,
      drone.positionY._text
    );

    droneArrUpdate.push({
      ...drone,
      isViolated: isViolated,
      distance: distance,
    });
  });

  const violatedDrones = droneArrUpdate.filter((drone) => {
    return drone.isViolated === true;
  });

  return violatedDrones;
};

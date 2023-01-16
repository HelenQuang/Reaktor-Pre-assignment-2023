export const calculateDistance = ({ dronePositionX, dronePositionY }) => {
  const ratio = 0.001; //ratio between real measurement and XYcoordinates
  const NDZPositionX = 250000; //No Drone Zone original coordinate on X-axis
  const NDZPositionY = 250000; //No Drone Zone original coordinate on Y-axis

  //Difference between NDZ and drone position on X-axis
  const differenceX = (NDZPositionX - dronePositionX) * ratio;

  //Difference between NDZ and drone position on Y-axis
  const differenceY = (NDZPositionY - dronePositionY) * ratio;

  //Calculate distance between NDZ and drone position based on Pythagorean theorem
  const distance = Math.sqrt(
    Math.pow(differenceX, 2) + Math.pow(differenceY, 2)
  );

  return distance <= 100;
};

export default calculateDistance;

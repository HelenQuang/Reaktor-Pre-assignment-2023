import fetch from "node-fetch";
import convert from "xml-js";

export const fetchDroneData = async () => {
  try {
    //Fetch drone data from API
    const response = await fetch(
      "https://assignments.reaktor.com/birdnest/drones"
    );

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const fetchData = await response.text();

    //Convert XML to JSON
    const convertedFetchData = convert.xml2js(fetchData, {
      compact: true,
      spaces: 4,
    });

    const droneArr = convertedFetchData.report.capture.drone;

    return droneArr;
  } catch (err) {
    console.log(err);
  }
};

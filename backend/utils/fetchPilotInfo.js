import fetch from "node-fetch";

export const fetchPilotInfo = async (serialNumber) => {
  try {
    const response = await fetch(
      `http://assignments.reaktor.com/birdnest/pilots/${serialNumber}`
    );

    if (!response.ok || response.status === 404) {
      throw new Error("There is no pilot data");
    }

    if (response.ok && response.status === 200) {
      const data = await response.json();

      const pilotInfo = {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phoneNumber: data.phoneNumber,
      };

      return pilotInfo;
    }
  } catch (err) {
    console.log(err);
  }
};

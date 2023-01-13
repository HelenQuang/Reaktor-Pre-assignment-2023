import express from "express";
import fetch from "node-fetch";
import convert from "xml-js";

const app = express();

app.get("/", async (req, res) => {
  //Fetch drone positions data
  const response = await fetch(
    "https://assignments.reaktor.com/birdnest/drones"
  );
  const fetchData = await response.text();

  //Convert XML to JSON
  const data = convert.xml2js(fetchData, { compact: true, spaces: 4 });

  res.status(200).json({ status: "success", data });
});

export default app;

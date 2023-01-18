import { useEffect, useState } from "react";
import { Container, Paper, Typography, CircularProgress } from "@mui/material";

import fetchDataModel from "./models/fetchDataModel";
import infoModel from "./models/infoModel";
import ResultTable from "./components/ResultTable";

const App = () => {
  const [violatedInfo, setViolatedInfo] = useState<infoModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchViolatedInfo = async () => {
    try {
      const res = await fetch("/violatedInfo");
      if (!res.ok) {
        throw new Error(`This is an HTTP error: The status is ${res.status}`);
      }
      const data = await res.json();

      setViolatedInfo(
        data.data.map((el: fetchDataModel) => {
          return el.info;
        })
      );

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchViolatedInfo();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1.5rem",
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: "bold" }}>
        Birdnest Project
      </Typography>
      <Typography variant="h6" sx={{ fontStyle: "italic" }}>
        This table lists all violated drones information within 100 meter-radius
        of a Monadikuikka birdnest
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "2rem" }}>
          <ResultTable violatedInfo={violatedInfo} />
        </Paper>
      )}
    </Container>
  );
};

export default App;

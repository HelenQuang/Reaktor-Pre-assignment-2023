import infoModel from "../models/infoModel";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface ResultTableProsp {
  violatedInfo: infoModel[];
}

const ResultTable = ({ violatedInfo }: ResultTableProsp) => {
  return (
    <TableContainer sx={{ maxHeight: "80vh" }}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="pilot-info-table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontSize: "1.25rem" }}>
              Drone Serial Number
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "1.25rem" }}>
              Latest Observation
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "1.25rem" }}>
              Distance To The Nest
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "1.25rem" }}>
              Name
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "1.25rem" }}>
              Email
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "1.25rem" }}>
              Phone Number
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {violatedInfo &&
            violatedInfo.flat(2).map((el, index) => {
              return (
                <TableRow key={index}>
                  <TableCell sx={{ fontSize: "1rem" }} align="center">
                    {el.droneSerialNumber}
                  </TableCell>
                  <TableCell sx={{ fontSize: "1rem" }} align="center">
                    {new Date(el.observedAt).toLocaleString()}
                  </TableCell>
                  <TableCell sx={{ fontSize: "1rem" }} align="center">
                    {el.distance.toFixed(2)} meters
                  </TableCell>
                  <TableCell sx={{ fontSize: "1rem" }} align="center">
                    {el.pilotName}
                  </TableCell>
                  <TableCell sx={{ fontSize: "1rem" }} align="center">
                    {el.pilotEmail}
                  </TableCell>
                  <TableCell sx={{ fontSize: "1rem" }} align="center">
                    {el.pilotPhoneNumber}
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultTable;

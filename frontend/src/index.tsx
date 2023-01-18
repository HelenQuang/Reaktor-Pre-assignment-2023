import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CustomTheme from "./layout/CustomTheme";
import { ThemeProvider } from "@mui/material/styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={CustomTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

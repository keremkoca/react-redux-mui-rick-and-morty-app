import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import React from "react";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";
import { Routes, Route } from "react-router";
import { green, purple } from "@mui/material/colors";
import Layout from "./Layouts";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  console.log(useSelector((state) => state));
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="characters" element={<Characters />} />
          <Route path="locations" element={<Locations />} />
          <Route path="episodes" element={<Episodes />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;

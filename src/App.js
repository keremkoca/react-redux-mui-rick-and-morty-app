import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import React from "react";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";
import { Routes, Route } from "react-router";
import { green, purple, grey } from "@mui/material/colors";
import Layout from "./layouts";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: grey[900],
    },
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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

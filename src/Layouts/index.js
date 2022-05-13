import React from "react";
import { Container, Box } from "@mui/material";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const DefaultAppBar = () => {
  const pages = ["characters", "locations", "episodes"];
  return (
    <AppBar position="static">
      <Container sx={{ marginTop: 1, marginBottom: 1 }} maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Box
              component="img"
              sx={{ marginLeft: 5, width: 200, heigth: 200 }}
              src={process.env.PUBLIC_URL + "/assets/logo.png"}
            />
          </Link>
          <Box
            sx={{
              justifyContent: "space-evenly",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ margin: 5, my: 2, color: "white", display: "block" }}
                href={`${page}`}
                variant="outlined"
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default function Layout({ children }) {
  return (
    <Box>
      <DefaultAppBar />
      {children}
    </Box>
  );
}

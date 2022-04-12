import * as React from "react";
import { Link } from "react-router-dom";
import { Box, AppBar, Button, Toolbar } from "@mui/material";

export default function Header() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {localStorage.getItem("jwt") && (
            <Button component={Link} to={"/createEvent"} color="inherit">
              Create
            </Button>
          )}
          <Button component={Link} to={"/"} color="inherit">
            Home
          </Button>
          <Button component={Link} to={"/auth"} color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

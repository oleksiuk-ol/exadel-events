import * as React from "react";
import { Link } from "react-router-dom";
import { Box, AppBar, Button, Toolbar } from "@mui/material";
import jwt_decode from "jwt-decode";
import { userSelector } from "../redux/selectors";
import { useSelector } from "react-redux";

export default function Header() {
  const userData = useSelector(userSelector);
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {(userData.jwt
            ? jwt_decode(userData.jwt).role === "admin"
            : false) && (
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

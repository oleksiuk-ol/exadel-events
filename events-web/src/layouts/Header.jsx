import * as React from "react";
import { Link } from "react-router-dom";
import { Box, AppBar, Button, Toolbar } from "@mui/material";
import jwt_decode from "jwt-decode";
import DrawerForm from "../components/DrawerForm";
import { userSelector } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const userData = useSelector(userSelector);
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {(userData.email
            ? jwt_decode(userData.email).role === "admin"
            : false) && (
            <Button component={Link} to={"/createEvent"} color="inherit">
              Create
            </Button>
          )}

          <DrawerForm />
          {console.log("Header here!")}
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

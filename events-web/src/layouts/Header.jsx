import * as React from "react";
import { Link } from "react-router-dom";
import { Box, AppBar, Button, Toolbar } from "@mui/material";
import jwt_decode from "jwt-decode";
import DrawerForm from "../components/DrawerForm";

export default function Header() {
  const conditionalProps =
    jwt_decode(localStorage.getItem("jwt")).role === "admin"
      ? { component: Link, to: "/auth" }
      : { component: Link, to: "/createEvent" };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* {jwt_decode(localStorage.getItem("jwt")).role === "admin" && (
            <Button component={Link} to={"/createEvent"} color="inherit">
              Create
            </Button> */}

          <Button
            // disabled={jwt_decode(localStorage.getItem("jwt")).role !== "admin"}
            // component={Link}
            // to={"/createEvent"}
            {...conditionalProps}
            color="inherit"
          >
            Create
          </Button>
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

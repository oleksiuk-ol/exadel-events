import React from "react";
import { Box, Typography, Drawer, Button } from "@mui/material";
import { userSelector } from "../redux/selectors";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";

const DrawerForm = () => {
  const [open, setOpen] = React.useState(false);
  const userData = useSelector(userSelector);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      {/* {jwt_decode(userData.email).role === "admin" && (
        <Button
          color="inherit"
          onClick={handleClickOpen}
          disabled={
            userData.email ? jwt_decode(userData.email).role !== "admin" : true
          }
        >
          Open
        </Button>
      )} */}
      {(userData.email
        ? jwt_decode(userData.email).role === "admin"
        : false) && (
        <Button
          color="inherit"
          onClick={handleClickOpen}
          disabled={
            userData.email ? jwt_decode(userData.email).role !== "admin" : true
          }
        >
          Open
        </Button>
      )}
      <Box display="flex">
        <Drawer anchor="right" open={open} variant="persistent">
          {/* <Box width="20vw" display="flex" flexDirection="column"> */}
          <Typography>I'm drawer!</Typography>
          <Button color="inherit" onClick={handleClickClose}>
            Close
          </Button>
        </Drawer>

        {/* <Button {...conditionalProps} color="inherit">
          {userData?.email ?? "Log In"}
        </Button> */}
      </Box>
    </Box>
  );
};

export default DrawerForm;

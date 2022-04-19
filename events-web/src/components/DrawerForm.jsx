import React from "react";
import { Box, Typography, Drawer, Button } from "@mui/material";
import jwt_decode from "jwt-decode";

const DrawerForm = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        color="inherit"
        onClick={handleClickOpen}
        disabled={jwt_decode(localStorage.getItem("jwt")).role !== "admin"}
      >
        Open
      </Button>
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

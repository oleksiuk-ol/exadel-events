import * as React from "react";
import { Box, AppBar, Typography, Button, Toolbar } from "@mui/material";

export default function Header() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

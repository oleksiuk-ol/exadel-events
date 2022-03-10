import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const AuthForm = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      gap="20px"
    >
      <Typography textAlign="center" variant="h5"></Typography>
      <TextField label="Email" variant="standard" name="email" />
      <TextField
        label="Password"
        type="password"
        variant="standard"
        name="password"
      />

      <Button variant="contained">Log in</Button>
    </Box>
  );
};
export default AuthForm;

import React from "react";
import axios from "axios";
import { Box, TextField, Button, Typography } from "@mui/material";

const AuthForm = () => {
  const postTest = () => {
    axios
      .post("http://localhost:3001/users/auth/signup", {
        username: "1",
        password: "2",
      })
      .then((res) => {
        console.log(res);
      });
  };

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

      <Button variant="contained" onClick={postTest}>
        Log in
      </Button>
    </Box>
  );
};
export default AuthForm;

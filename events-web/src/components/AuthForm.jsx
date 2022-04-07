import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const AuthForm = () => {
  const [isNew, setIsNew] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setIsNew(event.target.checked);
  };
  const handleInputChange = (event) => {
    if (localStorage.getItem("jwt") !== null) {
      console.log("Localstorage exist!", localStorage.getItem("jwt"));
    }
    const credField = event.target.name;
    setUser({
      ...user,
      [credField]: event.target.value,
    });
  };

  const handleButtonClick = () => {
    axios
      .post(`http://localhost:3001/users/auth/${isNew ? "signUp" : "logIn"}`, {
        ...user,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("jwt", res.data);
      });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      gap="20px"
    >
      <Typography textAlign="center" variant="h5">
        {isNew ? "Sign up" : "Log in"}
      </Typography>
      <TextField
        label="Email"
        variant="standard"
        name="email"
        onChange={handleInputChange}
      />
      <TextField
        label="Password"
        type="password"
        variant="standard"
        name="password"
        onChange={handleInputChange}
      />
      <Button variant="contained" onClick={handleButtonClick}>
        Log in
      </Button>
      <FormControlLabel
        control={<Checkbox checked={isNew} onChange={handleChange} />}
        label="New user?"
      />
    </Box>
  );
};
export default AuthForm;

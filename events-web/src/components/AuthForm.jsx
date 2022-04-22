import React, { useState } from "react";
import axios from "axios";
import { userLogin, userRegistration } from "../redux/actions/auth";
import { userSelector } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const AuthForm = () => {
  const userData = useSelector(userSelector);
  const dispatch = useDispatch();
  const [isNew, setIsNew] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setIsNew(event.target.checked);
  };
  const handleInputChange = (event) => {
    const credField = event.target.name;
    setUser({
      ...user,
      [credField]: event.target.value,
    });
  };

  const handleButtonClick = () => {
    isNew
      ? dispatch(userRegistration(user.email, user.password))
      : dispatch(userLogin(user.email, user.password));
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      gap="20px"
    >
      {console.log("UserData ", userData)}
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

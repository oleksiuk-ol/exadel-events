import React from "react";

import { Box } from "@mui/material";
import AuthForm from "../components/AuthForm";

const Authorization = () => {
  return (
    <Box
      sx={{ border: 1, borderColor: "grey.500" }}
      width="400px"
      bgcolor="#F0F8FF"
      marginTop="30px"
      height="auto"
      padding="20px"
    >
      {/* {postTest} */}
      {console.log("Auth")}
      <AuthForm></AuthForm>
    </Box>
  );
};

export default Authorization;

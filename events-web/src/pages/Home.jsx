import React from "react";
import { Box, Button } from "@mui/material";
import jwt_decode from "jwt-decode";

const Home = () => {
  const handleButtonClick = () => {
    console.log(localStorage.getItem("jwt"));
    const decoded = jwt_decode(localStorage.getItem("jwt"));

    console.log(decoded);
  };

  return (
    <Box>
      <Button variant="contained" onClick={handleButtonClick}>
        Test jwt
      </Button>
      {console.log("home")}
    </Box>
  );
};

export default Home;

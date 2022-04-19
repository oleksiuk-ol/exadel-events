import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";
import jwt_decode from "jwt-decode";

const Layout = ({ children }) => {
  var decode;
  useEffect(() => {
    // dispatch(getUserEmail);
    decode = jwt_decode(localStorage.getItem("jwt"));
  }, []);

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Header />
      {console.log("LAYOUT")}
      {console.log(decode)}
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;

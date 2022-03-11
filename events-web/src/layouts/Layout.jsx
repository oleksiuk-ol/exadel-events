import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Header />
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

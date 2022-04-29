import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { getAllEventsAction } from "../redux/actions/events";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEventsAction());
  }, []);

  return <Box>{console.log("home")}</Box>;
};

export default Home;

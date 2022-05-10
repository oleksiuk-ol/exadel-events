import React, { useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { getAllEventsAction } from "../redux/actions/events";
import { useDispatch, useSelector } from "react-redux";
import EventCard from "../components/EventCard";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEventsAction());
  }, []);

  const events = useSelector((state) => state.eventsList.events);

  return (
    <Grid container spacing={2} alignItems="center" marginTop="10px">
      {events?.length ? (
        events.map((eventItem) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            key={eventItem.id}
            align="center"
          >
            <EventCard data={eventItem} />
          </Grid>
        ))
      ) : (
        <Box bgcolor="#F0F8FF" width="400px" height="400px" margin="10px">
          <Typography>Empty</Typography>
        </Box>
      )}
      {console.log(events)}
    </Grid>
  );
};

export default Home;

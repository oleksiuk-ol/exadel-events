import React from "react";
import { Box, Typography, Button } from "@mui/material";

const EventCard = (data) => {
  return (
    <Box
      border={2}
      borderColor="#90caf9"
      borderRadius={8}
      width="235px"
      height="350px"
      padding="10px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <Typography gutterBottom variant="h6">
          {data.data.name}
        </Typography>
      </Box>
      <Box sx={{ maxWidth: "250px" }}>
        <Typography>{data.data.description}</Typography>
        <Typography>{data.data.startDate}</Typography>
        <Typography>{data.data.endDate}</Typography>
      </Box>
      <Box>
        <Typography>{data.data.type}</Typography>
        {data.data.type === "Offline" && (
          <Typography>{data.data.address}</Typography>
        )}
        {console.log("CARD", data)}
      </Box>
      <Box>
        <Button color="primary" variant="outlined">
          {" "}
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default EventCard;

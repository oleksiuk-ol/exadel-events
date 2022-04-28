import React from "react";
import { useDispatch } from "react-redux";
import { createEventAction } from "../redux/actions/events";
import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import dayjs from "dayjs";
import { useFormik } from "formik";

const CreateEvent = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      startDate: dayjs().format("YYYY-MM-DD"),
      endDate: dayjs().format("YYYY-MM-DD"),
      type: "Online",
      address: "",
    },
    onSubmit: (values) => {
      values.type === "Online" && (values.address = "");
      dispatch(createEventAction(values));
    },
  });

  return (
    <Box padding="20px">
      <Typography>Create event</Typography>
      <Box padding="20px">
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <TextField
              name="name"
              id="name_input"
              onChange={formik.handleChange}
              value={formik.values.name}
              label="Name"
            />
            <TextField
              name="description"
              id="description_input"
              onChange={formik.handleChange}
              value={formik.values.password}
              label="Description"
            />
            <TextField
              name="startDate"
              id="start_date_input"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.startDate}
              label="Start date"
            />
            <TextField
              name="endDate"
              id="end_date_input"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.endDate}
              label="End date"
            />
            <FormControl fullWidth>
              <Select
                id="type_select"
                value={formik.values.type}
                name="type"
                onChange={formik.handleChange}
              >
                <MenuItem value="Online">Online</MenuItem>
                <MenuItem value="Offline">Offline</MenuItem>
              </Select>
            </FormControl>
            {formik.values.type === "Offline" && (
              <TextField
                id="address_input"
                name="address"
                label="Address"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
            )}
            <Button type="submit" id="form_submit">
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default CreateEvent;

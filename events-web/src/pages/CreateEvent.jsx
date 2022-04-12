import React from "react";
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
import { LocalizationProvider, DateTimePicker } from "@mui/lab";
import dayjs from "dayjs";
import AdapterDayJs from "@mui/lab/AdapterDayjs";
import { useFormik } from "formik";

const CreateEvent = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      startDate: dayjs(),
      endDate: dayjs(),
      type: "Online",
      address: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayJs}>
      <Box padding="20px">
        <Typography>Create event</Typography>
        <Box padding="20px">
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2}>
              <TextField
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                label="Name"
              />
              <TextField
                name="description"
                onChange={formik.handleChange}
                value={formik.values.password}
                label="Description"
              />
              <DateTimePicker
                label="Start date"
                name="startDate"
                value={formik.values.startDate}
                onChange={(dateValue) =>
                  formik.setFieldValue("startDate", dateValue)
                }
                ampm={false}
                renderInput={(params) => <TextField {...params} />}
              />
              <DateTimePicker
                label="End date"
                name="endDate"
                value={formik.values.endDate}
                onChange={(dateValue) =>
                  formik.setFieldValue("endDate", dateValue)
                }
                ampm={false}
                renderInput={(params) => <TextField {...params} />}
              />
              <FormControl fullWidth>
                <Select
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
                  name="address"
                  lavel="Address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                />
              )}
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default CreateEvent;

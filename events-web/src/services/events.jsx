import axios from "axios";

export const createEvent = async (eventData) => {
  return axios
    .post(`http://localhost:3001/event/event/createEvent`, {
      ...eventData,
    })
    .then((res) => res.data);
};

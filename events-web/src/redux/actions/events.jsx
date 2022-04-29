import { createEvent, getAllEvents } from "../../services/events";
import { EVENT } from "./constants";

export const getAllSuccess = (payload) => ({
  type: EVENT.SUCCESS,
  payload,
});

export const createEventAction = (eventData) => async () => {
  await createEvent(eventData);
};

export const getAllEventsAction = () => async (dispatch) => {
  const eventList = await getAllEvents();
  if (eventList) {
    dispatch(getAllSuccess({ events: eventList }));
  }
};

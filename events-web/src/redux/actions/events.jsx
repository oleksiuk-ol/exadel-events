import { createEvent } from "../../services/events";

export const createEventAction = (eventData) => async () => {
  await createEvent(eventData);
};

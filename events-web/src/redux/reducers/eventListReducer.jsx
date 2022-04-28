import { EVENT } from "../actions/constants";

const initState = {};
const eventListReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case EVENT.SUCCESS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default eventListReducer;

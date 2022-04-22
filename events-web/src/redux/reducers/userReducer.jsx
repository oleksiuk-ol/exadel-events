import { AUTH } from "../actions/constants";

const initState = {};
const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case AUTH.SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case AUTH.LOGOUT:
      return initState;
    default:
      return state;
  }
};

export default userReducer;

import { combineReducers } from "redux";

import user from "./userReducer";
import eventsList from "./eventListReducer";

const rootReducer = combineReducers({
  user,
  eventsList,
});

export default rootReducer;

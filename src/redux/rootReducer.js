import { combineReducers } from "redux";
import userReduce from "./user/userReducer";

export default combineReducers({
  user: userReduce,
});

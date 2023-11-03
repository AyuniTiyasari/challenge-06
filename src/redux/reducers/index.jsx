import { combineReducers } from "@reduxjs/toolkit";
import postReducers from "./postReducers";
import authReducers from "./authReducers";

export default combineReducers({
  post: postReducers,
  auth: authReducers,
});
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import CounterSlices from "./Slices/CounterSlice";
const reducer = combineReducers({
  counter: CounterSlices,
});
const store = configureStore({
  reducer,
});
export default store;

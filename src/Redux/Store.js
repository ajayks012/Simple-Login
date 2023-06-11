import LoginReducer from "./Reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: LoginReducer,
});

export default store;

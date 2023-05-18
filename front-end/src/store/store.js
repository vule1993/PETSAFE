import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"; //is used to pipeline the dispatched objects and give us a feeling of sync execution by being async
import { userReducer } from "./userReducer";
import { searchReducer } from "./searchReducer";
import petReducer from "./petReducer";
const rootReducer = combineReducers({
  user: userReducer,
  searchReducer: searchReducer,
  petReducer: petReducer,
});
const logger = () => (next) => (action) => {
  console.log("action logger store ", action);
  next(action);
};
export default configureStore(
  { reducer: rootReducer },
  {}, //initial state if we want to set from store instead of reducer
  applyMiddleware(thunk, logger)
);

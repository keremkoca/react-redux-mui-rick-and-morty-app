import { configureStore } from "@reduxjs/toolkit";
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
} from "react-redux";
import { rootReducer } from "./rootReducer";

const store = configureStore({
  reducer: { rootReducer },
});
const useSelector = useReduxSelector;
const useDispatch = useReduxDispatch;

export { store, useSelector, useDispatch };

import { combineReducers } from "redux";
import charReducer from "./slices/characters";

const rootReducer = combineReducers({
  characters: charReducer,
});

export { rootReducer };

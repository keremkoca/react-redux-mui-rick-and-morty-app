import { combineReducers } from "redux";
import charReducer from "./slices/characters";
import locReducer from "./slices/locations";
import epReducer from "./slices/episodes";

const rootReducer = combineReducers({
  characters: charReducer,
  locations: locReducer,
  episodes: epReducer,
});

export { rootReducer };

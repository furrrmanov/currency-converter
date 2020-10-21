import { combineReducers } from "redux";
import charts from "./chartsReducer";
import currency from "./currencyReducer";
import global from "./globalReducer";
import panels from "./panelsReducer";
import user from "./userReducer";
import directory from "./direcoryReducer";

export default combineReducers({
  global,
  currency,
  panels,
  charts,
  user,
  directory,
});

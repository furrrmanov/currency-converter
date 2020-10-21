import {
  watchFetchData,
  watchChangeCurrencyValue,
  watchFetchHistory,
  watchFetchCountries,
} from "./currencies";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    watchFetchData(),
    watchChangeCurrencyValue(),
    watchFetchHistory(),
    watchFetchCountries(),
  ]);
}

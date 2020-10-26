import { all } from 'redux-saga/effects'

import {
  watchFetchCurrencies,
  watchChangeCurrencyValue,
  watchFetchHistory,
  watchFetchCountries,
  watchUserSingInRequest,
  watchReversedCurrecyPanel,
} from './currencies'

export default function* rootSaga() {
  yield all([
    watchFetchCurrencies(),
    watchChangeCurrencyValue(),
    watchFetchHistory(),
    watchFetchCountries(),
    watchUserSingInRequest(),
    watchReversedCurrecyPanel()
  ])
}

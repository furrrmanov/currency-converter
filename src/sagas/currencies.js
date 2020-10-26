import { takeEvery, put, call, select } from 'redux-saga/effects'

import moment from 'moment'

import {
  getLastLimitingItemsFromFirebaseDB,
  singInGoogleAccountUsingFirebase,
} from '@/utils/fireBase'
import { CURRENCY_API_KEY } from '@/constants'

import {
  SET_USER_REQUEST,
  SET_CURRENCIES_REQUEST,
  SET_COUNTRIES_REQUEST,
  CALCULATE_RATES,
  SET_PANEL_REVERSE_REQUEST,
  setCurrenciesResponse,
  setFailResponse,
  setCurrencyValuesAction,
  setCurrenciesRates,
  calculateRate,
  setChartsCurrency,
  setCurrencyAction,
  setCountriesLIst,
  setCountriesSelected,
  setUserInfo,
  reversePanels,
} from '@/actions'
import {
  requestCurrencies,
  getGeolocationPoint,
  requestCountriesList,
} from '@/services/axios'

import {
  transformCurrenciesRatesResponse,
  calculateRates,
  transformCountryList,
} from '@/utils/data-mappers.js'

export function* watchFetchCurrencies() {
  yield takeEvery(SET_CURRENCIES_REQUEST, workerDataCurrencies)
}

function* workerDataCurrencies({ initPanels }) {
  try {
    const payload = yield call(requestCurrencies, 'currencies.json')

    const localStorage = window.localStorage.getItem('state')

    if (!localStorage) {
      const locationCurrency = yield getGeolocationPoint()

      if (initPanels && payload.data[locationCurrency.data.currency.code]) {
        yield put(
          setCurrencyAction('left', locationCurrency.data.currency.code)
        )
        yield put(calculateRate('left'))
      } else {
        yield put(setCurrencyAction('left', 'USD'))
        yield put(calculateRate('left'))
      }
    }

    yield put(
      setCurrenciesResponse(transformCurrenciesRatesResponse(payload.data))
    )
  } catch (error) {
    yield put(setFailResponse(error.message))
  }
}

export function* watchChangeCurrencyValue() {
  yield takeEvery(CALCULATE_RATES, workerCalculateRates)
}

function* workerCalculateRates({ payload }) {
  const response = yield call(
    requestCurrencies,
    `latest.json?app_id=${CURRENCY_API_KEY}`
  )

  yield put(setCurrenciesRates(response.data.rates))

  const state = yield select()

  const value = yield call(
    calculateRates,
    state.panels.panels,
    payload,
    state.currency.rates
  )

  yield put(setCurrencyValuesAction(value))
}

export function* watchFetchHistory() {
  yield takeEvery('SET_CHARTS_REQUEST', workerDataHistory)
}

function* workerDataHistory() {
  const response = yield getLastLimitingItemsFromFirebaseDB()

  const transformResponse = response.reduce((acc, item) => {
    acc.push({
      name: moment(+item.date).format('DD-MMM-YY'),
      ...item.rates,
    })
    return acc
  }, [])

  yield put(setChartsCurrency(transformResponse))
}

export function* watchFetchCountries() {
  yield takeEvery(SET_COUNTRIES_REQUEST, workerDataCountries)
}

function* workerDataCountries() {
  const response = yield requestCountriesList('/all')
  const data = response.data.map(transformCountryList)

  yield put(
    setCountriesSelected({
      name: 'Belarus',
      coordinates: [53, 28],
    })
  )
  yield put(setCountriesLIst(data))
}

export function* watchUserSingInRequest() {
  yield takeEvery(SET_USER_REQUEST, workerUserSignin)
}

function* workerUserSignin() {
  const data = yield singInGoogleAccountUsingFirebase()

  yield put(
    setUserInfo({
      isLogged: true,
      name: `${data.displayName}`,
      photoUrl: `${data.providerData[0].photoURL}`,
    })
  )
}

export function* watchReversedCurrecyPanel() {
  yield takeEvery(SET_PANEL_REVERSE_REQUEST, workerCurrencyPanelReverse)
}

function* workerCurrencyPanelReverse() {
  const state = yield select()
  const currencyValue = state.panels.panels

  yield put(
    reversePanels({
      right: {
        code: currencyValue['right'].code,
        value: currencyValue['right'].value,
      },
      left: {
        code: currencyValue['left'].code,
        value: currencyValue['left'].value,
      },
    })
  )
}

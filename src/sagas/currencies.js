import { takeEvery, put, call, select } from "redux-saga/effects";

import moment from 'moment';

import { fireBaseDB } from "@/utils/fireBase";

import {
  setCurrenciesResponse,
  setFailResponse,
  setCurrencyValuesAction,
  setCurrenciesRates,
  calculateRate,
  setChartsCurrency,
  setCurrencyAction,
  setCountriesLIst,
} from "@/actions";

import { requestCurrencies, getGeolocationPoint, requestCountriesList } from "@/services/axios";
import { CURRENCY_API_KEY } from "@/constants";
import exchangeCurrencies from "@/utils/exchangeCurrencies";

export function* watchFetchData() {
  yield takeEvery("SET_CURRENCIES_REQUEST", workerLoadData);
}

function* workerLoadData({ initPanels }) {
  try {
    const payload = yield call(requestCurrencies, "currencies.json");
    // const locationCurrency = yield getGeolocationPoint();
    const localStorage = window.localStorage.getItem("state");
    
    if(!localStorage) {
      const locationCurrency = yield getGeolocationPoint();
      
      if (initPanels && payload.data[locationCurrency.data.currency.code]) {
        yield put(setCurrencyAction("left", locationCurrency.data.currency.code));
        yield put(calculateRate("left"));
      } else {
        yield put(setCurrencyAction("left", "USD"));
        yield put(calculateRate("left"));
      }
    }

    yield put(setCurrenciesResponse(transformResponse(payload.data)));

    // if (initPanels && payload.data[locationCurrency.data.currency.code]) {
    //   yield put(setCurrencyAction("left", locationCurrency.data.currency.code));
    //   yield put(calculateRate("left"));
    // } else {
    //   yield put(setCurrencyAction("left", "USD"));
    //   yield put(calculateRate("left"));
    // }

  } catch (error) {
    yield put(setFailResponse(error.message));
  }
}

const transformResponse = response => {
  const transformedResponse = Object.entries(response).map(item => {
    return { code: item[0], name: item[1] };
  }, {});

  return transformedResponse;
};

export function* watchChangeCurrencyValue() {
  yield takeEvery("CALCULATE_RATES", workerCalculateRates);
}

function* workerCalculateRates({ payload }) {
  const response = yield call(
    requestCurrencies,
    `latest.json?app_id=${CURRENCY_API_KEY}`
  );

  yield put(setCurrenciesRates(response.data.rates));

  const state = yield select();

  const value = yield call(
    calculateRates,
    state.panels.panels,
    payload,
    state.currency.rates
  );

  yield put(setCurrencyValuesAction(value));
}


const calculateRates = async (allPanels, activePanelName, rates) => {
  const panelsCurrencies = filterActivePanel(allPanels, activePanelName);

  return Object.keys(allPanels)
    .filter(item => item !== activePanelName)
    .reduce((acc, item, index) => {
      acc.push({
        name: item,
        value: (
          allPanels[activePanelName].value *
          exchangeCurrencies(
            rates,
            allPanels[activePanelName].code,
            panelsCurrencies[index].currency
          )
        ).toFixed(3),
      });
      return acc;
    }, []);
};

const filterActivePanel = (panels, activPanel) => {
  return Object.entries(panels)
    .filter(item => item[0] !== activPanel)
    .reduce((acc, item) => {
      acc.push({
        name: item[0],
        currency: item[1].code,
      });
      return acc;
    }, []);
};

export function* watchFetchHistory() {
  yield takeEvery("SET_CHARTS_REQUEST", workerDataHistory);
}

function* workerDataHistory() {
  const response = yield fireBaseDB();

  const transformResponse = response.reduce((acc, item) => {
    acc.push({
      name: moment(+item.date).format("DD-MMM-YY"),
      ...item.rates,
    });
    return acc;
  }, []);

  yield put(setChartsCurrency(transformResponse));
}

export function* watchFetchCountries() {
  yield takeEvery("SET_COUNTRIES_REQUEST", workerDataCountries);
}

function* workerDataCountries() {
  const response = yield requestCountriesList("/all");
  const data = response.data.map(transformCountryList);

  yield put(setCountriesLIst(data));
}

 const transformCountryList = country => {
  return {
    name: country.name,
    capital: country.capital,
    flag: country.flag,
    population: country.population,
    area: country.area,
    coordinate: country.latlng,
  };
 };



import {
  SET_CURRENCIES_RESPONSE,
  SET_CURRENCIES_REQUEST,
  SET_CURRENCIES_RESPONSE_FAIL,
  SET_CURRENCY_VALUE,
  SET_CURRENCY_VALUES,
  SET_CURRENCY,
  CALCULATE_RATES,
  SET_CURRENCY_RATES,
  TOGGLE_COLOR_THEME,
  SET_LANGUAGE,
  SNACKBAR_SUCCESS,
  SNACKBAR_CLEAR,
  SET_CHARTS,
  SET_CHARTS_REQUEST,
  SET_SELECT_CURRENCIES,
  SET_ROOT_CURRENCIES_SELECTOR,
  SET_USER_INFO,
  USER_LOGOUT,
  SET_COUNTRIES_REQUEST,
  SET_COUNTRIES_LIST,
  SET_COUNTRIES_FILTER,
  SET_COUNTRY_SELECTED,
} from "../redux/reducer/type";

export const getCurrencyListRequest = initPanels => {
  return {
    type: SET_CURRENCIES_REQUEST,
    initPanels,
  };
};

export const setCurrenciesResponse = value => {
  return {
    type: SET_CURRENCIES_RESPONSE,
    payload: value,
  };
};

export const setFailResponse = error => {
  return {
    type: SET_CURRENCIES_RESPONSE_FAIL,
    error,
  };
};

export const setCurrencyValueAction = (name, value) => ({
  type: SET_CURRENCY_VALUE,
  payload: {
    name,
    value,
  },
});

export const setCurrencyValuesAction = value => ({
  type: SET_CURRENCY_VALUES,
  payload: value,
});

export const setCurrencyAction = (name, value) => ({
  type: SET_CURRENCY,
  payload: {
    name,
    value,
  },
});

export const calculateRate = name => ({
  type: CALCULATE_RATES,
  payload: name,
});

export const setCurrenciesRates = value => ({
  type: SET_CURRENCY_RATES,
  payload: value,
});

export const toggleColorTHeme = () => ({
  type: TOGGLE_COLOR_THEME,
});

export const setLanguage = lang => ({
  type: SET_LANGUAGE,
  payload: lang,
});


export const showSuccessSnackbar = message => ({
  type: SNACKBAR_SUCCESS,
  payload: message,
});

export const clearSnackbar = () => ({
  type: SNACKBAR_CLEAR,
});


export const setChartsRequest = () => ({
  type: SET_CHARTS_REQUEST,
});

export const setChartsCurrency = value => ({
 type: SET_CHARTS,
 payload: value,
});


export const setSelectCurrencyFromCharts = value => ({
  type: SET_SELECT_CURRENCIES,
  payload: value,
});

export const setRootCurrenciesSelector = value => ({
  type: SET_ROOT_CURRENCIES_SELECTOR,
  payload: value,
});

export const setUserInfo = value => ({
  type: SET_USER_INFO,
  payload: value,
});

export const userLogOut = value => ({
  type: USER_LOGOUT,
  payload: value,
});

export const getCountryRequest = () => ({
  type: SET_COUNTRIES_REQUEST,
});

export const setCountriesLIst = value => ({
  type: SET_COUNTRIES_LIST,
  payload: value,
});

export const setCountriesFilter = value => ({
  type: SET_COUNTRIES_FILTER,
  payload: value,
});

export const setCountriesSelected = value => ({
 type: SET_COUNTRY_SELECTED,
 payload: value,
});




export const SET_CURRENCIES_REQUEST = 'SET_CURRENCIES_REQUEST'
export const SET_CURRENCIES_RESPONSE = 'SET_CURRENCIES'
export const SET_CURRENCIES_RESPONSE_FAIL = 'SET_CURRENCIES_RESPONSE_FAIL'
export const SET_CURRENCY_RATES = 'SET_CURRENCY_RATES'

export const getCurrencyListRequest = (initPanels) => {
  return {
    type: SET_CURRENCIES_REQUEST,
    initPanels,
  }
}

export const setCurrenciesResponse = (value) => {
  return {
    type: SET_CURRENCIES_RESPONSE,
    payload: value,
  }
}

export const setFailResponse = (error) => {
  return {
    type: SET_CURRENCIES_RESPONSE_FAIL,
    error,
  }
}

export const setCurrenciesRates = (value) => ({
  type: SET_CURRENCY_RATES,
  payload: value,
})

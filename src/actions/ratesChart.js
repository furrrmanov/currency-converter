export const SET_CHARTS = 'SET_CHARTS'
export const SET_CHARTS_REQUEST = 'SET_CHARTS_REQUEST'
export const SET_SELECT_CURRENCIES = 'SET_SELECT_CURRENCIES'
export const SET_ROOT_CURRENCIES_SELECTOR = 'SET_ROOT_CURRENCIES_SELECTOR'

export const setChartsRequest = () => ({
  type: SET_CHARTS_REQUEST,
})

export const setChartsCurrency = (value) => ({
  type: SET_CHARTS,
  payload: value,
})

export const setSelectCurrencyFromCharts = (value) => ({
  type: SET_SELECT_CURRENCIES,
  payload: value,
})

export const setRootCurrenciesSelector = (value) => ({
  type: SET_ROOT_CURRENCIES_SELECTOR,
  payload: value,
})

export const SET_CURRENCY_VALUE = 'SET_CURRENCY_VALUE'
export const SET_CURRENCY = 'SET_CURRENCY'
export const CALCULATE_RATES = 'CALCULATE_RATES'
export const SET_CURRENCY_VALUES = 'SET_CURRENCY_VALUES'

export const setCurrencyValueAction = (name, value) => ({
  type: SET_CURRENCY_VALUE,
  payload: {
    name,
    value,
  },
})

export const setCurrencyValuesAction = (value) => ({
  type: SET_CURRENCY_VALUES,
  payload: value,
})

export const setCurrencyAction = (name, value) => ({
  type: SET_CURRENCY,
  payload: {
    name,
    value,
  },
})

export const calculateRate = (name) => ({
  type: CALCULATE_RATES,
  payload: name,
})

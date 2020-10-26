import {
  SET_CURRENCIES_RESPONSE,
  SET_CURRENCIES_REQUEST,
  SET_CURRENCY_RATES,
  SET_CURRENCIES_RESPONSE_FAIL,
} from '@/actions'

const initialState = {
  currencyOptions: [],
  rates: {},
  error: '',
}

export default function currency(state = initialState, { type, payload, error }) {
  switch (type) {
    case SET_CURRENCIES_REQUEST:
      return {
        ...state,
      }

    case SET_CURRENCIES_RESPONSE:
      return {
        ...state,
        currencyOptions: payload,
      }

    case SET_CURRENCIES_RESPONSE_FAIL:
      return {
        ...state,
        error: error,
      }

    case SET_CURRENCY_RATES:
      return {
        ...state,
        rates: payload,
      }

    default:
      return state
  }
}

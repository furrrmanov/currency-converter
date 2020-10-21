import {
  SET_CURRENCIES_RESPONSE,
  SET_CURRENCIES_REQUEST,
  SET_CURRENCY_RATES,
} from "./type";

const initialState = {
  currencyOptions: [],
  rates: {},
};

export default function currency(state = initialState, { type, payload }) {
  switch (type) {

    case SET_CURRENCIES_REQUEST:
      return {
        ...state,
      };

    case SET_CURRENCIES_RESPONSE:
      return {
        ...state,
        currencyOptions: payload,
      };

    case SET_CURRENCY_RATES:
      return {
        ...state,
        rates: payload,
      };

    default:
      return state;
  }
}

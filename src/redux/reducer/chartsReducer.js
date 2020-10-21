import { SET_CHARTS, SET_CHARTS_REQUEST, SET_SELECT_CURRENCIES, SET_ROOT_CURRENCIES_SELECTOR } from "./type";

const initialState = {
  selectCurrencies: [],
  rootCurrenciesSelector: "USD",
  charts: [
    { currency: "BYN", date: "", name: "", uv: 0, pv: 0, amt: 0 },
    { currency: "USD", date: "", name: "", uv: 0, pv: 0, amt: 0 },
    { currency: "EUR", date: "", name: "", uv: 0, pv: 0, amt: 0 },
    { currency: "UAH", date: "", name: "", uv: 0, pv: 0, amt: 0 },
    { currency: "RUB", date: "", name: "", uv: 0, pv: 0, amt: 0 },
  ],
};

export default function charts(state = initialState, { type, payload }) {
  switch (type) {
    case SET_CHARTS_REQUEST:
      return {
        ...state,
      };

    case SET_CHARTS:
      return {
        ...state,
        charts: payload,
      };

    case SET_SELECT_CURRENCIES:
      return {
        ...state,
        selectCurrencies: [...state.selectCurrencies, payload].filter(item => {
          if(state.selectCurrencies.includes(payload)) {
            return item !== payload;
          } else {
            return payload;
          }
        }),
      };

      case SET_ROOT_CURRENCIES_SELECTOR:
        return {
          ...state,
          rootCurrenciesSelector: payload,
        };

    default:
      return state;
  }
}

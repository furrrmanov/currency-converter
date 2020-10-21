import { SET_CURRENCY_VALUE, SET_CURRENCY, SET_CURRENCY_VALUES } from "./type";

const initialState = {
  panels: {
    left: {
      code: "",
      value: 1,
    },
    right: {
      code: "USD",
      value: "",
    },
  },
};

export default function panels(state = initialState, { type, payload }) {
  switch (type) {
    case SET_CURRENCY_VALUE:
      return {
        ...state,
        panels: {
          ...state.panels,
          [payload.name]: {
            ...state.panels[payload.name],
            value: payload.value,
          },
        },
      };

    case SET_CURRENCY_VALUES:
      return {
        ...state,
        panels: {
          ...state.panels,
          ...payload.reduce((acc, interedValue) => {
            acc[interedValue.name] = {
              ...state.panels[interedValue.name],
              value: interedValue.value,
            };

            return acc;
          }, {}),
        },
      };

    case SET_CURRENCY:
      return {
        ...state,
        panels: {
          ...state.panels,
          [payload.name]: {
            ...state.panels[payload.name],
            code: payload.value,
          },
        },
      };

    default:
      return state;
  }
}

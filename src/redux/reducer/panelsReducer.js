import {
  SET_CURRENCY_VALUE,
  SET_CURRENCY,
  SET_CURRENCY_VALUES,
  SET_REVERSE_PANEL,
  SET_PANEL_REVERSE_REQUEST,
} from '@/actions'

const initialState = {
  panels: {
    left: {
      code: '',
      value: 1,
    },
    right: {
      code: 'USD',
      value: '',
    },
  },
}

export default function panels(state = initialState, { type, payload }) {
  switch (type) {
    
    case SET_PANEL_REVERSE_REQUEST:
      return {
        ...state,
      }

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
      }

    case SET_CURRENCY_VALUES:
      return {
        ...state,
        panels: {
          ...state.panels,
          ...payload.reduce((acc, interedValue) => {
            acc[interedValue.name] = {
              ...state.panels[interedValue.name],
              value: interedValue.value,
            }

            return acc
          }, {}),
        },
      }

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
      }

    case SET_REVERSE_PANEL:
      return {
        ...state,
        panels: {
          left: {
            code: payload.right.code,
            value: payload.right.value,
          },
          right: {
            code: payload.left.code,
            value: payload.left.value,
          },
        },
      }

    default:
      return state
  }
}

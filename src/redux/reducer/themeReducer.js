import { TOGGLE_COLOR_THEME } from '@/actions'

const initialState = {
  darkTheme: false,
}

export default function theme(state = initialState, { type, payload }) {
  switch (type) {
    case TOGGLE_COLOR_THEME:
      return {
        ...state,
        darkTheme: !state.darkTheme,
      }

    default:
      return state
  }
}

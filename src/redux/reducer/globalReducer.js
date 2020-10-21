import {
  SET_CURRENCIES_RESPONSE_FAIL,
  TOGGLE_COLOR_THEME,
  SET_LANGUAGE,
  SNACKBAR_SUCCESS,
  SNACKBAR_CLEAR,
} from "./type";

const initialState = {
  error: "",
  successSnackbarOpen: false,
  successSnackbarMessage: "",
  isLoading: false,
  darkTheme: false,
  language: "en",
};

export default function global(state = initialState, { type, payload, error }) {
  switch (type) {
    case SET_CURRENCIES_RESPONSE_FAIL:
      return {
        ...state,
        error: error,
      };

    case TOGGLE_COLOR_THEME:
      return {
        ...state,
        darkTheme: !state.darkTheme,
      };

    case SET_LANGUAGE:
      return {
        ...state,
        language: payload,
      };

    case SNACKBAR_SUCCESS:
      return {
        ...state,
        successSnackbarOpen: true,
        successSnackbarMessage: payload,
      };
    case SNACKBAR_CLEAR:
      return {
        ...state,
        successSnackbarOpen: false,
      };

    default:
      return state;
  }
}

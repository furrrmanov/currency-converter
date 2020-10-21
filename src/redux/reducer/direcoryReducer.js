import {
  SET_COUNTRIES_LIST,
  SET_COUNTRIES_FILTER,
  SET_COUNTRY_SELECTED,
  SET_COUNTRIES_REQUEST,
} from "./type";

const initialState = {
  countriesList: [],
  filter: "",
  selectedCountry: {
    name: "",
    coordinate: [],
  },
};

export default function directory(state = initialState, { type, payload }) {
  switch (type) {

    case SET_COUNTRIES_REQUEST:
      return {
        ...state,
      };

    case SET_COUNTRIES_LIST:
      return {
        ...state,
        countriesList: payload,
      };

    case SET_COUNTRIES_FILTER:
      return {
        ...state,
        filter: payload,
      };

    case SET_COUNTRY_SELECTED:
      return {
        ...state,
        selectedCountry: {
          ...state.selectedCountry,
          name: payload.name,
          coordinate: payload.coordinate,
        },
      };

    default:
      return state;
  }
}

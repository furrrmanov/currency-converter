export const SET_COUNTRIES_REQUEST = 'SET_COUNTRIES_REQUEST'
export const SET_COUNTRIES_LIST = 'SET_COUNTRIES_LIST'
export const SET_COUNTRIES_FILTER = 'SET_COUNTRIES_FILTER'
export const SET_COUNTRY_SELECTED = 'SET_COUNTRY_SELECTED'

export const getCountryRequest = () => ({
  type: SET_COUNTRIES_REQUEST,
})

export const setCountriesLIst = (value) => ({
  type: SET_COUNTRIES_LIST,
  payload: value,
})

export const setCountriesFilter = (value) => ({
  type: SET_COUNTRIES_FILTER,
  payload: value,
})

export const setCountriesSelected = (value) => ({
  type: SET_COUNTRY_SELECTED,
  payload: value,
})

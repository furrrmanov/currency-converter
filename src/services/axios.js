import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

import {
  CURRENCY_API_BASE,
  GEOLOCATION_API_BASE,
  GEOLOCATION_APY_KEY,
  COUNTRY_APY_BASE,
  MILISECONDS_IN_MONTH
} from '../constants'

const cache = setupCache({
  maxAge: MILISECONDS_IN_MONTH,
})

const api = axios.create({
  adapter: cache.adapter,
})

export const requestCurrencies = (url) => {
  return api.get(`${CURRENCY_API_BASE}${url}`)
}

export const requestCountriesList = (url) => {
  return api.get(`${COUNTRY_APY_BASE}${url}`)
}

export const getGeolocationPoint = () => {
  return axios.get(`${GEOLOCATION_API_BASE}${GEOLOCATION_APY_KEY}`)
}

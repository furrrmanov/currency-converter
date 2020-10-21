import axios from "axios";
import { setupCache } from "axios-cache-adapter";

import {
  CURRENCY_API_BASE,
  GEOLOCATION_API_BASE,
  GEOLOCATION_APY_KEY,
  COUNTRY_APY_BASE,
} from "../constants";

const cache = setupCache({
  maxAge: 1 * 30 * 24 * 60 * 60 * 1000,
});

const api = axios.create({
  adapter: cache.adapter,
});

export const requestCurrencies = url => {
  return api.get(`${CURRENCY_API_BASE}${url}`);
};

export const requestCountriesList = url => {
  return api.get(`${COUNTRY_APY_BASE}${url}`);
};

export const getGeolocationPoint = () => {
  return axios.get(`${GEOLOCATION_API_BASE}${GEOLOCATION_APY_KEY}`);
};

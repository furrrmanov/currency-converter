import React, { useEffect } from 'react'
import { Provider } from 'react-redux'

import moment from 'moment'

import {
  getCurrencyListRequest,
  setChartsRequest,
  getCountryRequest,
} from '@/actions'

import ThemeWrapper from '@/components/wrappers/ThemeWrapper'
import IntlProviderWrapper from '@/components/wrappers/IntlProviderWrapper'
import RouteWrapper from './components/wrappers/RouteWrapper'
import { database, getLastCurrenciesRatesFirebaseDB } from '@/utils/fireBase'
import { store } from '@/redux/store'


const dataProvider = jsonServerProvider('https://openexchangerates.org/api/currencies.json');

function App() {
  const localeTimeInMilliseconds = moment().format('x')
  const hoursDelay = 8 * 60 * 60 * 1000;

  const getElementInLocalTime = () => {
    return {
      date: `${moment().format('x')}`,
      rates: store.getState().currency.rates,
    }
  }

  useEffect(() => {
    // store.dispatch(getCurrencyListRequest(true));
    console.log(dataProvider)
    store.dispatch(setChartsRequest())
    store.dispatch(getCountryRequest())

    getLastCurrenciesRatesFirebaseDB().then((lastItemTime) => {
      if (localeTimeInMilliseconds - lastItemTime >= hoursDelay) {
        database.ref('/history').push(getElementInLocalTime())
      }
    })
  }, [store])

  return (
    <Provider store={store}>
      <IntlProviderWrapper>
        <ThemeWrapper>
          <RouteWrapper />
        </ThemeWrapper>
      </IntlProviderWrapper>
    </Provider>
  )
}

export default App

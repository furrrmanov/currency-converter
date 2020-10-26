import exchangeCurrencies from '@/utils/exchangeCurrencies'

export const transformCurrenciesRatesResponse = (response) => {
  const transformedResponse = Object.entries(response).map((item) => {
    return { code: item[0], name: item[1] }
  }, {})

  return transformedResponse
}

export const calculateRates = (allPanels, activePanelName, rates) => {
  const panelsCurrencies = filterActivePanel(allPanels, activePanelName)

  return Object.keys(allPanels)
    .filter((item) => item !== activePanelName)
    .reduce((acc, item, index) => {
      acc.push({
        name: item,
        value: (
          allPanels[activePanelName].value *
          exchangeCurrencies(
            rates,
            allPanels[activePanelName].code,
            panelsCurrencies[index].currency
          )
        ).toFixed(3),
      })
      return acc
    }, [])
}

export const filterActivePanel = (panels, activPanel) => {
  return Object.entries(panels)
    .filter((item) => item[0] !== activPanel)
    .reduce((acc, item) => {
      acc.push({
        name: item[0],
        currency: item[1].code,
      })
      return acc
    }, [])
}

export const transformCountryList = (country) => {
  return {
    name: country.name,
    capital: country.capital,
    flag: country.flag,
    population: country.population,
    area: country.area,
    coordinate: country.latlng,
  }
}

export const filterDataForSelectedCurrenies = (data, selectCurrency, rates, rootCurrenciesSelector) => {
  return data.reduce((acc, item) => {
    acc.push({
      name: item['name'],
      ...Object.keys(item)
        .filter((key) => selectCurrency.includes(key))
        .reduce((acc, value) => {
          acc[value] = item[value] / rates[rootCurrenciesSelector]
          return acc
        }, {}),
    })
    return acc
  }, [])
}

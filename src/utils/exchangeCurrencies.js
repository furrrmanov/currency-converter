export default function exchangeCurrencies(list, from, to) {
  const currencyValue = list[to] / list[from]
  return currencyValue
}
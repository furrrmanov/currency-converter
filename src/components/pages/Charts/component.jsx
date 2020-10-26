import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'
import { FormattedMessage } from 'react-intl'

import { InputLabel } from '@/components/controls/Selector'
import BasicLayout from '@/components/layouts/BasicLayout/component'
import { hashCode, intToRGB } from '@/utils/colorGenerate'
import { filterDataForSelectedCurrenies } from '@/utils/data-mappers.js'
import {
  setSelectCurrencyFromCharts,
  setRootCurrenciesSelector,
} from '@/actions'

import {
  Wrapper,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  ChartsContainer,
  SelectButtonContainer,
  Select,
} from './styles'


const arrCurrency = ['USD', 'BYN', 'RUB', 'EUR', 'UAH']

export default function Charts() {
  const data = useSelector((state) => state.charts.charts)
  const rates = useSelector((state) => state.currency.rates)
  const selectCurrency = useSelector((state) => state.charts.selectCurrencies)
  const rootCurrenciesSelector = useSelector((state) => state.charts.rootCurrenciesSelector)
  const dispatch = useDispatch()  
  const filteredData = filterDataForSelectedCurrenies(data, selectCurrency, rates, rootCurrenciesSelector)


  useEffect(() => {
    if (!selectCurrency.length) {
      dispatch(setSelectCurrencyFromCharts('BYN'))
    }
  }, [selectCurrency.length, dispatch])

  const handleChange = ({ target }) => {
    dispatch(setSelectCurrencyFromCharts(target.name))
  }

  const handleRootCurrenciesSelector = ({ target }) => {
    dispatch(setRootCurrenciesSelector(target.value))
  }

  return (
    <BasicLayout>
      <Wrapper>
        <SelectButtonContainer>
          <FormControl className="form-control">
            <InputLabel>
              <FormattedMessage id="currencyLabel" defaultMessage="Currency" />
            </InputLabel>
            <Select
              native
              onChange={handleRootCurrenciesSelector}
              value={rootCurrenciesSelector}>
              {arrCurrency.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )
              })}
            </Select>
          </FormControl>
        </SelectButtonContainer>
        <ChartsContainer>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <FormattedMessage id="currencyLabel" defaultMessage="Currency" />
            </FormLabel>
            <FormGroup>
              {arrCurrency.map((item) => {
                return (
                  <FormControlLabel
                    key={item}
                    control={
                      <Checkbox
                        name={item}
                        checked={selectCurrency.includes(item)}
                        onChange={handleChange}
                      />
                    }
                    label={item}
                  />
                )
              })}
            </FormGroup>
          </FormControl>

          <LineChart width={700} height={250} data={filteredData}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#84a98c" strokeDasharray="5 5" />
            {selectCurrency.map((item) => {
              return (
                <Line
                  key={item}
                  type="monotone"
                  dataKey={item}
                  stroke={`#${intToRGB(hashCode(item))}`}
                />
              )
            })}
            <Legend />
            <Tooltip />
          </LineChart>
        </ChartsContainer>
      </Wrapper>
    </BasicLayout>
  )
}

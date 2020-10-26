import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { FormattedMessage } from 'react-intl'
import TextField from '@material-ui/core/TextField'

import currenciesCodeTransform from '@/utils/currencies'
import {
  setCurrencyAction,
  setCurrencyValueAction,
  calculateRate,
} from '@/actions'
import Autocomplete from '@/components/controls/Autocomplete'

import './currency-flags.css'
import { PaneWrapper, CurrencyName, CountryFlag } from './styles'

export default function CurrencyPane({ name }) {
  const currencyValue = useSelector((state) => state.panels.panels[name].value)
  const selectedCurrency = useSelector((state) => state.panels.panels[name])
  const currenciesOptions = useSelector((state) => state.currency.currencyOptions)
  const dispatch = useDispatch()

  const onChangeCurrencyValue = ({ target }) => {
    dispatch(setCurrencyValueAction(name, +target.value || ''))
    dispatch(calculateRate(name))
  }

  const onChangeCurrency = (value) => {
    if (value) {
      dispatch(setCurrencyAction(name, value.code))
      dispatch(calculateRate(name))
    }
  }

  const renderOptionsForAutocomolete = (option) => {
    return (
      <Fragment>
        <CurrencyName>{option.code}</CurrencyName>

        <CountryFlag
          className={`country-flag currency-flag currency-flag-${currenciesCodeTransform(
            option.code.toLowerCase()
          )}`}></CountryFlag>
      </Fragment>
    )
  }

  const renderInputForAutocomplete = (params) => {
    return (
      <TextField
        {...params}
        label={
          <FormattedMessage id="currencyLabel" defaultMessage="Currency" />
        }
      />
    )
  }

  return (
    <PaneWrapper>
      <Autocomplete
        className="combo-box-demo"
        options={currenciesOptions.map((option) => option)}
        value={selectedCurrency}
        getOptionSelected={(option) => option.code}
        onChange={(event, newValue) => {
          onChangeCurrency(newValue)
        }}
        getOptionLabel={(option) => option.code}
        renderInput={(params) => renderInputForAutocomplete(params)}
        renderOption={(option) => renderOptionsForAutocomolete(option)}
      />
      <TextField
        id="outlined-basic"
        type="number"
        value={currencyValue}
        label={<FormattedMessage id="valueLabel" defaultMessage="value" />}
        onChange={onChangeCurrencyValue}
      />
    </PaneWrapper>
  )
}

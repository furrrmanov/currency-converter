import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FormattedMessage } from 'react-intl';

import CurrenciesCodeTransform from "@/utils/currencies";
import { setCurrencyAction, setCurrencyValueAction, calculateRate } from '@/actions';
import  Autocomplete from '@/components/controls/Autocomplete';
import  TextField from '@/components/controls/TextField';

import "./currency-flags.css";
import {PaneWrapper, CurrencyName, CountryFlag} from "./style";

export default function CurrencyPane({ name }) {
  const currenciesOptions = useSelector(state => state.currency.currencyOptions);

  const currencyValue = useSelector(state => state.panels.panels[name].value);
  const selectedCurrency = useSelector(state => state.panels.panels[name]);

  const dispatch = useDispatch();


  const changeCurrencyValue = ({ target }) => {
    dispatch(setCurrencyValueAction(name, +target.value || ""));
    dispatch(calculateRate(name));
  };

  return (
    <PaneWrapper>
      <Autocomplete
        className="combo-box-demo"
        options={currenciesOptions.map(option => option)}
        value={selectedCurrency}
        getOptionSelected={option => option.code}
        onChange={(event, newValue) => {
          if(newValue) {
            dispatch(setCurrencyAction(name, newValue.code));
            dispatch(calculateRate(name));
          }
        }}
      
        getOptionLabel={option => option.code}
        style={{ width: 200 }}
        renderInput={params => <TextField {...params} label={ 
          <FormattedMessage 
            id="currencyLabel"
            defaultMessage="Currency" /> 
        } />}
        renderOption={option => {
          return (
            <Fragment>
              <CurrencyName>{option.code}</CurrencyName>

              <CountryFlag
                className={`country-flag currency-flag currency-flag-${CurrenciesCodeTransform(
                  option.code.toLowerCase()
                )}`}
              >
              </CountryFlag>
            </Fragment>
          );
        }}/>
      <TextField 
      id="outlined-basic"
      type="number"
      value={currencyValue}
      label={
        <FormattedMessage 
          id="valueLabel"
          defaultMessage="value" />
      }
      onChange={changeCurrencyValue}/>
    </PaneWrapper>
  );
}

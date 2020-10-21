import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import { Select, InputLabel } from "@/components/controls/SelectButton";
import { FormattedMessage } from "react-intl";
import { setSelectCurrencyFromCharts, setRootCurrenciesSelector } from "@/actions";

import {
  Wrapper,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  ChartsContainer,
  SelectButtonContainer,
} from "./style";
import BasicLayout from "../../layouts/BasicLayout/component";

const arrCurrency = ["USD", "BYN", "RUB", "EUR", "UAH"];

export default function Charts() {
  const data = useSelector(state => state.charts.charts);
  const rates = useSelector(state => state.currency.rates);
  const selectCurrency = useSelector(state => state.charts.selectCurrencies);
  const rootCurrenciesSelector = useSelector(state => state.charts.rootCurrenciesSelector);
  const dispatch = useDispatch();

  const filteringData = data.reduce((acc, item) => {
    acc.push({
      name: item["name"],
      ...Object.keys(item)
        .filter(key => selectCurrency.includes(key))
        .reduce((acc, value) => {
          acc[value] = item[value] / rates[rootCurrenciesSelector];
          return acc;
        }, {}),
    });
    return acc;
  }, []);


  function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  } 

  function intToRGB(i){
    const c = (i & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
  }

  useEffect(() => {
    if(!selectCurrency.length) {
      dispatch(setSelectCurrencyFromCharts("BYN"));
    }
  }, [selectCurrency.length, dispatch]);

  const handleChange = ({ target }) => {
    dispatch(setSelectCurrencyFromCharts(target.name));
  };

  const handleRootCurrenciesSelector = ({ target }) => {
    dispatch(setRootCurrenciesSelector(target.value));
  };

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
            style={{ width: 60 }}
            onChange={handleRootCurrenciesSelector}
            value={rootCurrenciesSelector}
          >
            {arrCurrency.map(item => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
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
            {arrCurrency.map(item => {
              return (
                <FormControlLabel
                  key={item}
                  control={
                    <Checkbox
                      name={item}
                      checked={selectCurrency.includes(item)}
                      onChange={handleChange}/>
                  }
                  label={item}/>
              );
            })}
          </FormGroup>
        </FormControl>
      
        <LineChart width={700} height={250} data={filteringData}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#84a98c" strokeDasharray="5 5" />
          {selectCurrency.map(item => {
            return (
              <Line key={item} type="monotone"
              dataKey={item}
              stroke={`#${intToRGB(hashCode(item))}`} />
            );
          })}
          <Legend />
          <Tooltip />
        </LineChart>
 
      </ChartsContainer>
    </Wrapper>
    </BasicLayout>
  );
}

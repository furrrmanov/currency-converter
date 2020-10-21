import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { FormattedMessage } from "react-intl";
import TextField from "@/components/controls/TextField";
import { setCountriesSelected, setCountriesFilter } from "@/actions";

import { Wrapper, InputContainer, ListContainer, ListItem } from "./style";

export default function CountryList() {
  const dispatch = useDispatch();
  const countriesInfo = useSelector(state => state.directory.countriesList);
  const filter = useSelector(state => state.directory.filter);

  const countriesList = countriesInfo.reduce((acc, item) => {
    acc.push((item.name).toLowerCase().includes(filter.toLowerCase()) ? item.name : null ); 
    return acc;
  }, []);

  const onChangeFilter = ({ target }) => {
    dispatch(setCountriesFilter(target.value));
  };

  const coordinatesSearch = country => {
    return countriesInfo.reduce((acc, item) => {
      if(item.name === country) {
        console.log(item.coordinate);
        acc.push(item.coordinate);
      }
      return acc.flat();
    }, []);
  };

  const onClickCountry = ({ target }) => {
    dispatch(setCountriesSelected({name: `${target.textContent}`, coordinate: 
    coordinatesSearch(target.textContent)}));
  };

  return (
    <Wrapper>
      <InputContainer>
        <TextField
          id="outlined-basic"
          type="text"
          onChange={onChangeFilter}
          value={filter || ""}
          label={
            <FormattedMessage id="countryLabel" defaultMessage="country" />
          }/>
      </InputContainer>
      <ListContainer>
        {countriesList.map((item, index) => {
          return <ListItem
           key={item + index}
           onClick={onClickCountry}
          >{item}</ListItem>;
        })}
      </ListContainer>
    </Wrapper>
  );
}

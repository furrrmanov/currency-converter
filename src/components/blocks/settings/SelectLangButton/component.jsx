import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { FormattedMessage } from 'react-intl';

import { Select, FormControl, InputLabel } from '@/components/controls/SelectButton';
import { setLanguage } from '@/actions';

export default function SelectLangButton() {
  const dispatch = useDispatch();
  const language = useSelector(state => state.global.language);

  const handleChange = ({ target }) => {
    dispatch(setLanguage(target.value));
  };

  return(
    <FormControl className="form-control">
        <InputLabel>
          <FormattedMessage id="selectLangButtonLabel"
            defaultMessage="Language" />  
        </InputLabel>
        <Select
          native
          style={{width:90}}
          onChange={handleChange}
          defaultValue={language}
        >
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </Select>
    </FormControl>
  );
}
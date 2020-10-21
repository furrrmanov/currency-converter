import React from "react";
import { useDispatch } from "react-redux";

import { FormattedMessage } from 'react-intl';

import Switch from '@/components/controls/SwitchButton';
import { toggleColorTHeme } from '@/actions';

import { ButtonContainer } from "./style";

export default function SwitchThemeButton() {
  const dispatch = useDispatch();

  const onToggleTheme = () => {
    dispatch(toggleColorTHeme());
  };

  return (
    <ButtonContainer>
      <span className="togggle-button-title" >
        <FormattedMessage id="toggleButtonLabel"
          defaultMessage="Theme" /> 
      </span>
      <Switch color="default" onChange={onToggleTheme} />
    </ButtonContainer>
  );
}

import React from 'react';

import SelectLangButton from './SelectLangButton';
import SwitchThemeButton from './SwitchThemeButton';
import { HeaderWrapper } from './style';

export default function Settings() {

  return(
    <HeaderWrapper>
      <SelectLangButton />
      <SwitchThemeButton />
    </HeaderWrapper>
  );
}
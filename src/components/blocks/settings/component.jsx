import React from 'react'

import LanguageSelector from './LanguageSelector'
import SwitchThemeButton from './SwitchButton'
import { HeaderWrapper } from './styles'

export default function Settings() {
  return (
    <HeaderWrapper>
      <LanguageSelector />
      <SwitchThemeButton />
    </HeaderWrapper>
  )
}

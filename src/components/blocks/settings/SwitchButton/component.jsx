import React from 'react'
import { useDispatch } from 'react-redux'

import { FormattedMessage } from 'react-intl'
import Switch from '@material-ui/core/Switch'

import { toggleColorTHeme } from '@/actions'

import { ButtonContainer } from './styles'

export default function SwitchThemeButton() {
  const dispatch = useDispatch()

  const handleThemeToggle = () => {
    dispatch(toggleColorTHeme())
  }

  return (
    <ButtonContainer>
      <span className="togggle-button-title">
        <FormattedMessage id="toggleButtonLabel" defaultMessage="Theme" />
      </span>
      <Switch color="default" onChange={handleThemeToggle} />
    </ButtonContainer>
  )
}

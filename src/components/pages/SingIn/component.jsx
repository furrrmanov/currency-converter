import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { FormattedMessage } from 'react-intl'
import Button from '@material-ui/core/Button'

import { ROUT_FOR_CONVERTER_PAGE } from '@/constants'
import { SetuserSingInRequest } from '@/actions'

import { Wrapper } from './styles'

export default function SignINPage() {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.user)

  const onClick = () => {
    dispatch(SetuserSingInRequest())
  }

  useEffect(() => {
    if (user.isLogged) {
      history.push(ROUT_FOR_CONVERTER_PAGE)
    }
  }, [user.isLogged, history])

  if (user.isLogged) {
    return null
  }

  return (
    <Wrapper>
      <Button variant="outlined" onClick={onClick}>
        <FormattedMessage id="signInLabel" defaultMessage="Sign-In" />
      </Button>
    </Wrapper>
  )
}

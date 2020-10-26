import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { FormattedMessage } from 'react-intl'
import Button from '@material-ui/core/Button'

import { showSuccessSnackbar } from '@/actions'
import { ROUT_FOR_ROOT_PAGE } from '@/constants'
import BasicLayout from '@/components/layouts/BasicLayout/component'

import { Wrapper } from './styles'

export default function Caches() {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleClearStorageOnClick = () => {
    localStorage.clear()
    dispatch(showSuccessSnackbar('Cache cleared !'))
    history.push(ROUT_FOR_ROOT_PAGE)
  }

  return (
    <BasicLayout>
      <Wrapper>
        <Button variant="outlined" onClick={handleClearStorageOnClick}>
          <FormattedMessage
            id="clearCachesButton"
            defaultMessage="Clear caches"
          />
        </Button>
      </Wrapper>
    </BasicLayout>
  )
}

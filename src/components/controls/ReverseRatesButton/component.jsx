import React from 'react'
import { useDispatch } from 'react-redux'

import CompareArrowsIcon from '@material-ui/icons/CompareArrows'

import Button from '@/components/controls/ReverseButton'
import { setReversePanelRequest } from '@/actions'

export default function RevereseRatesButton() {
  const dispatch = useDispatch()

  const handleReversePanelClick = () => {
    dispatch(setReversePanelRequest(true))
  }

  return (
    <Button className="reverse-rates-button" onClick={handleReversePanelClick}>
      <CompareArrowsIcon />
    </Button>
  )
}

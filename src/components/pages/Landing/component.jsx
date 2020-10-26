import React from 'react'

import CurrencyPane from '@/components/blocks/Panel/CurrencyPane'
import RevereseRatesButton from '@/components/controls/ReverseRatesButton'
import Settings from '@/components/blocks/Settings'
import BasicLayout from '@/components/layouts/BasicLayout/component'

import { Wrapper, PaneContainer } from './styles'

export default function Landing() {
  return (
    <BasicLayout>
      <Wrapper>
        <Settings />
        <PaneContainer>
          <CurrencyPane name="left" />
          <RevereseRatesButton />
          <CurrencyPane name="right" />
        </PaneContainer>
      </Wrapper>
    </BasicLayout>
  )
}

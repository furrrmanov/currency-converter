import React from 'react'

import BasicLayout from '@/components/layouts/BasicLayout/component'

import CountryList from '@/components/blocks/CountriesDirectoryList'
import WorldMap from '@/components/blocks/CountriesDirectoryMap'
import CountryDetails from '@/components/blocks/CountriesDirectoryDrawer'

import { Wrapper } from './styles'

export default function CountriesDirectory() {
  return (
    <BasicLayout>
      <Wrapper>
        <CountryList />
        <WorldMap />
        <CountryDetails />
      </Wrapper>
    </BasicLayout>
  )
}

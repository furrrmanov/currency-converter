import React from 'react'

import CurrencyPane from './currency-pane'

export default {
  title: 'CurrencyPane',
  component: CurrencyPane,
}

const Template = (args) => <CurrencyPane {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {}

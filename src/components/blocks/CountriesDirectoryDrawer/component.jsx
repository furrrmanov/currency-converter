import React from 'react'
import { useSelector } from 'react-redux'

import { FormattedMessage } from 'react-intl'

import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'

import { ListItemIcon, MenuOpenIcon, IMG } from './styles'

export default function CountryDetails() {
  const countriesList = useSelector((state) => state.directory.countriesList)
  const selectCountry = useSelector(
    (state) => state.directory.selectedCountry.name
  )
  const countryInfo = countriesList.find((item) => item.name === selectCountry)

  const [state, setState] = React.useState({
    isOpen: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open })
  }

  const list = () => (
    <div>
      <List>
        <ListItem>
          <FormattedMessage id="countryLabel" defaultMessage="country" />: {selectCountry}
          <ListItemIcon>
            <IMG src={`${countryInfo.flag}`} alt="flag" />
          </ListItemIcon>
        </ListItem>
        <Divider />
        <ListItem>
          <FormattedMessage id="capitalLabel" defaultMessage="capital" />: {countryInfo.capital}
        </ListItem>
        <Divider />
        <ListItem>
          <FormattedMessage id="areaLabel" defaultMessage="area" />: {countryInfo.area} km²
        </ListItem>
        <Divider />
        <ListItem>
          <FormattedMessage id="populationLabel" defaultMessage="population" />: {countryInfo.population}
        </ListItem>
        <Divider />
      </List>
    </div>
  )

  return (
    <div>
        <React.Fragment>
          <Button onClick={toggleDrawer('isOpen', true)}>
            <MenuOpenIcon />
          </Button>
          <Drawer
            anchor={'right'}
            open={state.isOpen}
            onClose={toggleDrawer('isOpen', false)}>
            {list('right')}
          </Drawer>
        </React.Fragment>
    </div>
  )
}

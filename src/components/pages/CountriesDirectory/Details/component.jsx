import React from "react";
import { useSelector } from "react-redux";

import { FormattedMessage } from "react-intl";

import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";

import { ListItemIcon, MenuOpenIcon } from "./style";


export default function CountryDetails() {
  const countriesList = useSelector(state => state.directory.countriesList);
  const selectCountry = useSelector(
    state => state.directory.selectedCountry.name
  );
  const countryInfo = countriesList.find(item => item.name === selectCountry);

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <div>
      <List>
        <ListItem>
          <FormattedMessage id="countryLabel" defaultMessage="country" />: {selectCountry}
          <ListItemIcon>
            <img
              style={{
                width: "50px",
                height: "30px",
              }}
              src={`${countryInfo.flag}`}
              alt="flag"/>
          </ListItemIcon>
        </ListItem>
        <Divider />
        <ListItem>
          <FormattedMessage 
          id="capitalLabel" 
          defaultMessage="capital" />:  {countryInfo.capital}
        </ListItem>
        <Divider />
        <ListItem>
          <FormattedMessage 
          id="areaLabel" 
          defaultMessage="area" />:  {countryInfo.area} km²
        </ListItem>
        <Divider />
        <ListItem>
          <FormattedMessage 
          id="populationLabel" 
          defaultMessage="population" />:  {countryInfo.population} 
        </ListItem>
        <Divider />
      </List>
    </div>
  );

  return (
    <div>
      {["right"].map(anchor => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuOpenIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { userLogOut } from "@/actions";
import RouterLink from "@/components/controls/RouterLink";
import { singOut } from "@/utils/fireBase";
import { FormattedMessage } from "react-intl";

import {
  AppBar,
  Toolbar,
  Menu,
  IconButton,
  MenuIcon,
  Wrapper,
  AccountCircle,
  MenuItem,
  UserName,
  Img,
  MenuWrapper,
} from "./style";

export default function NavigationBar() {
  const userName = useSelector(state => state.user.name);
  const userPhotoUrl = useSelector(state => state.user.photoUrl);
  const isLogged = useSelector(state => state.user.isLogged);
  const dispatch = useDispatch();
  const history = useHistory();
  const [userAnchorEl, setUserAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const open = Boolean(userAnchorEl);
  const openMenu = Boolean(menuAnchorEl);

  const handleUserMenu = event => {
    setUserAnchorEl(event.currentTarget);
  };

  const handleMenu = event => {
    setMenuAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setMenuAnchorEl(null);
  };

  const handleMenuLink = event => {
    history.push(`/${event.target.dataset.url}`);
  };

  const handleClose = () => {
    setUserAnchorEl(null);
  };

  const userSingOut = () => {
    setUserAnchorEl(null);
    dispatch(userLogOut(false));
    singOut();
    history.push("/singIn");
  };

  const userPhoto = <Img src={`${userPhotoUrl}`} alt="" />;

  return (
    <Wrapper>
      <AppBar position="static">
        <Toolbar>
          <MenuWrapper>
            <IconButton
              edge="start"
              className={{}}
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon className="menu-icon" />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={menuAnchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={openMenu}
              onClose={closeMenu}
            >
              <MenuItem onClick={handleMenuLink} data-url="cache">
                <FormattedMessage id="cachesLink" value="cache" defaultMessage="value" />
              </MenuItem>
              <MenuItem onClick={handleMenuLink} data-url="charts">
                <FormattedMessage id="chartsLink" defaultMessage="charts" />
              </MenuItem>
              <MenuItem onClick={handleMenuLink} data-url="converter">
                <FormattedMessage id="converterLink" defaultMessage="converter" />
              </MenuItem>
              <MenuItem onClick={handleMenuLink} data-url="directory">
                <FormattedMessage id="directoryLink" defaultMessage="directory" />
              </MenuItem>
            </Menu>
          </MenuWrapper>

          <div>
            <RouterLink to="cache" className="caches-link">
              <FormattedMessage id="cachesLink" defaultMessage="value" />
            </RouterLink>
            <RouterLink to="charts" className="caches-link">
              <FormattedMessage id="chartsLink" defaultMessage="charts" />
            </RouterLink>
            <RouterLink to="converter" className="caches-link">
              <FormattedMessage id="converterLink" defaultMessage="converter" />
            </RouterLink>
            <RouterLink to="directory" className="caches-link">
              <FormattedMessage id="directoryLink" defaultMessage="directory" />
            </RouterLink>
          </div>

          <div>
            <UserName>{isLogged ? userName : ""}</UserName>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleUserMenu}
              color="inherit"
            >
              {isLogged ? userPhoto : <AccountCircle />}
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={userAnchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={userSingOut}>
                <FormattedMessage id="logOutButton" defaultMessage="Log-uot" />
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Wrapper>
  );
}

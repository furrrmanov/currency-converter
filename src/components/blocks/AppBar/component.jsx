import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { FormattedMessage } from 'react-intl'

import { userLogOut } from '@/actions'
import RouterLink from '@/components/controls/RouterLink'
import { singOutGoogleAccountUsingFirebase } from '@/utils/fireBase'

import {
  ROUT_FOR_CONVERTER_PAGE,
  ROUT_FOR_CACHE_PAGE,
  ROUT_FOR_CHARTS_PAGE,
  ROUT_FOR_DIRECTORY_PAGE,
} from '@/constants'

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
} from './styles'

const routerLinkInfo = [
  {
    className: 'caches-link',
    id: 'cachesLink',
    to: `${ROUT_FOR_CACHE_PAGE}`,
    defaultMessage: 'value',
  },
  {
    className: 'caches-link',
    id: 'chartsLink',
    to: `${ROUT_FOR_CHARTS_PAGE}`,
    defaultMessage: 'charts',
  },
  {
    className: 'caches-link',
    id: 'converterLink',
    to: `${ROUT_FOR_CONVERTER_PAGE}`,
    defaultMessage: 'converter',
  },
  {
    className: 'caches-link',
    id: 'directoryLink',
    to: `${ROUT_FOR_DIRECTORY_PAGE}`,
    defaultMessage: 'directory',
  },
]

export default function NavigationBar() {
  const { name, photoUrl, isLogged } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const history = useHistory()
  const [userAnchorEl, setUserAnchorEl] = useState(null)
  const [menuAnchorEl, setMenuAnchorEl] = useState(null)
  const openUserMenu = Boolean(userAnchorEl)
  const openNavigationMenu = Boolean(menuAnchorEl)

  const handleUserMenuOnClick = (event) => {
    setUserAnchorEl(event.currentTarget)
  }

  const handleNavigationMenuOnCLick = (event) => {
    setMenuAnchorEl(event.currentTarget)
  }

  const closeNavigationMenu = () => {
    setMenuAnchorEl(null)
  }

  const CloseUserMenu = () => {
    setUserAnchorEl(null)
  }

  const userSingOut = () => {
    setUserAnchorEl(null)
    dispatch(userLogOut(false))
    singOutGoogleAccountUsingFirebase()
    history.push('/singIn')
  }

  const userPhoto = <Img src={`${photoUrl}`} alt="" />

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
              onClick={handleNavigationMenuOnCLick}>
              <MenuIcon className="menu-icon" />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={menuAnchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={openNavigationMenu}
              onClose={closeNavigationMenu}>

              {routerLinkInfo.map((item) => {
                return (
                  <MenuItem key={item.to} style={{ backGround: 'red' }}>
                    <RouterLink
                      key={item.to}
                      to={item.to}
                      className={item.className}>
                      <FormattedMessage
                        id={item.id}
                        defaultMessage={item.defaultMessage}
                      />
                    </RouterLink>
                  </MenuItem>
                )
              })}

            </Menu>
          </MenuWrapper>

          <div>
            {routerLinkInfo.map((item) => {
              return (
                <RouterLink
                  key={item.to}
                  to={item.to}
                  className={item.className}>
                  <FormattedMessage
                    id={item.id}
                    defaultMessage={item.defaultMessage}
                  />
                </RouterLink>
              )
            })}
          </div>

          <div>
            <UserName>{isLogged ? name : ''}</UserName>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleUserMenuOnClick}
              color="inherit">
              {isLogged ? userPhoto : <AccountCircle />}
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={userAnchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={openUserMenu}
              onClose={CloseUserMenu}>
              <MenuItem onClick={userSingOut}>
                <FormattedMessage id="logOutButton" defaultMessage="Log-uot" />
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Wrapper>
  )
}

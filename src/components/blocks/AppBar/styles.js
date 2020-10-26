import styled from 'styled-components'

import MaterialAppBar from '@material-ui/core/AppBar'
import MaterialToolbar from '@material-ui/core/Toolbar'
import MaterialTypography from '@material-ui/core/Typography'
import MaterialMenu from '@material-ui/core/Menu'
import MaterialIconButton from '@material-ui/core/IconButton'
import MaterialMenuIcon from '@material-ui/icons/Menu'
import MaterialAccountCircle from '@material-ui/icons/AccountCircle'
import MaterialMenuItem from '@material-ui/core/MenuItem'

export const AppBar = styled(MaterialAppBar)`
  display: flex;
  justify-content: space-beatween;
  height: 60px;
  background: ${(props) => !props.theme.background};

  @media screen and (max-width: 600px) {
    .caches-link {
      display: none;
    }
  }
`

export const AccountCircle = styled(MaterialAccountCircle)``

export const Toolbar = styled(MaterialToolbar)`
  display: flex;
  justify-content: space-between;
`

export const MenuItem = styled(MaterialMenuItem)`
  margin-left: 15px;
  padding-left: 0px;
`

export const Typography = styled(MaterialTypography)``

export const Menu = styled(MaterialMenu)`
  .MuiMenu-list {
    background-color: ${(props) => props.theme.secondary}!important;
  }
`

export const IconButton = styled(MaterialIconButton)``

export const MenuIcon = styled(MaterialMenuIcon)``

export const Wrapper = styled.div`
  padding-bottom: 40px;
`

export const MenuWrapper = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
  }
`

export const UserName = styled.span`
  font-size: 1rem;
  margin-right: 20px;
`

export const Img = styled.img`
  width: 35px;
  border-radius: 100px;
`

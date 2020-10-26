import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import {
  ROUT_FOR_ROOT_PAGE,
  ROUT_FOR_CONVERTER_PAGE,
  ROUT_FOR_CACHE_PAGE,
  ROUT_FOR_CHARTS_PAGE,
  ROUT_FOR_DIRECTORY_PAGE,
  ROUT_FOR_SINGIN_PAGE,
  ROUT_FOR_UNAUTHORIZED_PAGE,
} from '@/constants'
import Landing from '@/components/pages/Landing'
import Caches from '@/components/pages/Caches'
import Charts from '@/components/pages/Charts'
import MessagesBar from '@/components/blocks/MessagesBar'
import CountriesDirectory from '@/components/pages/CountriesDirectory/component'
import SignINPage from '@/components/pages/SingIn'
import UnauthorizedUser from '@/components/pages/UnauthorizedUser'
import PrivateRout from '@/components/wrappers/SingInWrapper'

export default function RouteWrapper() {
  return (
    <Router>
      <MessagesBar />
      <Switch>
        <Redirect path={ROUT_FOR_ROOT_PAGE} to={ROUT_FOR_CONVERTER_PAGE} exact
        />
        <PrivateRout path={ROUT_FOR_CACHE_PAGE} component={Caches} />
        <PrivateRout path={ROUT_FOR_CHARTS_PAGE} component={Charts} />
        <PrivateRout path={ROUT_FOR_DIRECTORY_PAGE} component={CountriesDirectory} />
        <Route path={ROUT_FOR_SINGIN_PAGE} component={SignINPage} />
        <Route path={ROUT_FOR_UNAUTHORIZED_PAGE} component={UnauthorizedUser} />
        <PrivateRout path={ROUT_FOR_CONVERTER_PAGE} component={Landing} />
      </Switch>
    </Router>
  )
}

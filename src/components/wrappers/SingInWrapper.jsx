import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'

import { checkUserAuth } from '@/utils/fireBase'

export default function PrivateRout(props) {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    checkUserAuth().then((value) => {
      setIsAuth(value)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return (
      <div style={{ margin: '15rem auto' }}>
        <CircularProgress />
      </div>
    )
  }

  return isAuth ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/unauthorized" />
  )
}

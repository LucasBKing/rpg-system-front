import React, { Fragment } from 'react'
import * as Routes from './routes'
import { createBrowserHistory } from 'history'
import { Router, Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...params }) => {
  return (
    <Route
      {...params}
      render={props =>
        localStorage.getItem('@rpgAuth:token') ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  )
}

const PublicRoute = ({ component: Component, ...params }) => {
  return (
    <Route
      {...params}
      render={props =>
        !localStorage.getItem('@rpgAuth:token') ? (
          <Component {...props} />
        ) : (
          <Redirect to='/homepage' />
        )
      }
    />
  )
}

const App = () => {
  const history = createBrowserHistory()
  return (
    <Router history={history}>
      <Fragment>
        <PublicRoute path='/login' component={Routes.Login} />

        <PrivateRoute path='/' component={Routes.Homepage} />
      </Fragment>
    </Router>
  )
}

export default App

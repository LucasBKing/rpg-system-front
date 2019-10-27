import React, { Fragment } from 'react'
import * as Routes from './routes'
import { createBrowserHistory } from 'history'
import { Router, Route, Redirect } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { Colors } from './themes'

const PrivateRoute = ({ component: Component, ...params }) => {
  return (
    <Fragment>
      
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
    </Fragment>
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
          <Redirect to='/' />
        )
      }
    />
  )
}

const App = () => {
  const history = createBrowserHistory()
  const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

    body {
      font-family: 'Roboto', sans-serif;
      background-color: ${Colors.IndigoBase};
    }
  `
  return (
    <Router history={history}>
      <GlobalStyle />
      <Fragment>
        <PublicRoute path='/login' component={Routes.Login} />

        <PrivateRoute path='/' component={Routes.Homepage} />
      </Fragment>
    </Router>
  )
}

export default App

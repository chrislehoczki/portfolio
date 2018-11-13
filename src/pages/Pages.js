import React from 'react'
import { func, shape } from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from '../SSR/routes'

const propTypes = {}

const Pages = () => (
  <Switch>
    {routes.filter(({external}) => !external)
      .map(({path, page: Page, exact, auth, ...routeOptions}) => (
        <Route
          key={path}
          exact={exact}
          path={path}
          render={({match: { params }}) => (
              <Page
                {...params}
                {...routeOptions}
              />
          )}
        />
      ))}
    <Route render={() => <Redirect to='/' />} />
  </Switch>
)

Pages.propTypes = propTypes

export default Pages

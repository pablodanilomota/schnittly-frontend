import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/**
 * Available routes.
 */
import { Shortner } from './pages/Shortner'

/**
 * Enabled routes.
 */
export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Shortner} />
      </Switch>
    </Router>
  )
}

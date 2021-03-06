import '../modules/styles.css'
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import NoMatch from './components/NoMatch'
import SimpleForm from './components/SimpleForm'

export default (
  <Route>
    <Route path='/' component={App}>
      <IndexRoute component={SimpleForm} />
    </Route>
    <Route path='*' status={404} component={NoMatch} />
  </Route>
)

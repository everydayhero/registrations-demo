import '../modules/styles.css'
import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import { ServerRoute } from 'react-project'
import hello from './api/hello'
import App from './components/App'
import NoMatch from './components/NoMatch'
import Dragon from './components/Dragon'
import SimpleForm from './components/SimpleForm'

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={SimpleForm}/>
      <Route path="dragon" component={Dragon}/>
    </Route>
    <ServerRoute path="/api">
      <ServerRoute path=":hello" get={hello}/>
    </ServerRoute>
    <Redirect from="/not-dragon" to="/dragon"/>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)

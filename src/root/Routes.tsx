import * as React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch, Redirect } from 'react-router-dom'

import Launches from 'modules/Launches/containers/Launches'
import Rockets from 'modules/Rockets/Rockets'
import Todos from 'modules/Todos/container/TodosContainer'

// import Header from 'common/containers/Header'

const Routes = () => (
  <div>
    { /* <Header> */ }
    <Switch>
      <Redirect exact from='/' to='/todos' />
      <Route path='/launches' component={Launches} />
      <Route path='/rockets' component={Rockets}/>
      <Route path='/todos' component={Todos}/>
    </Switch>
  </div>
)

export default hot(module)(Routes)

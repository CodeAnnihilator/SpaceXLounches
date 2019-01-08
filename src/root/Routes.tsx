import * as React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch, Redirect } from 'react-router-dom'

import Launches from 'modules/Launches/containers/Launches'
import Rockets from 'modules/Rockets/Rockets'

import Header from 'common/containers/Header'

const Routes = () => (
  <div>
    <Header />
    <Switch>
      <Redirect exact from='/' to='/launches' />
      <Route path='/launches' component={Launches} />
      <Route path='/rockets' component={Rockets}/>
    </Switch>
  </div>
)

export default hot(module)(Routes)
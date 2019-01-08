import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import entitiesReducer from 'common/reducers/entities'

const rootReducer = (history: History) => combineReducers({
  entities: entitiesReducer,
  router: connectRouter(history)
})

export default rootReducer
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import entitiesReducer from 'common/reducers/entities'
import todosReducer from 'modules/Todos/reducers/todosReducer'

const rootReducer = (history: History) => combineReducers({
  entities: entitiesReducer,
  todos: todosReducer,
  router: connectRouter(history)
})

export default rootReducer
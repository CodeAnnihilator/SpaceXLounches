import { createAsyncAction } from 'typesafe-actions'

import { ITodo } from 'common/types/entities'

import { todos as todosTypes } from '../constants/todos'

export const requestTodos = createAsyncAction(
  todosTypes.ADD_TODO,
  todosTypes.REMOVE_TOTO,
  todosTypes.TODO_ERROR
)<void, Array<ITodo>, Error>()
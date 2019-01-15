import { createAsyncAction } from 'typesafe-actions'

import { ITodoList } from 'common/types/entities'

import { todoList as todoListsTypes, removeTodoList as removeTodoListTypes } from '../constants/entities'

export const requestTodosLists = createAsyncAction(
  todoListsTypes.TODO_LIST_ADD_START,
  todoListsTypes.TODO_LIST_ADD_SUCCESS,
  todoListsTypes.TODO_LIST_ADD_ERROR
)<void, ITodoList, Error>()

export const removeTodoLists = createAsyncAction(
  removeTodoListTypes.TODO_LIST_REMOVE_START,
  removeTodoListTypes.TODO_LIST_REMOVE_SUCCESS,
  removeTodoListTypes.TODO_LIST_REMOVE_ERROR
)<void, Number, Error>()

import { createAsyncAction } from 'typesafe-actions'

import { ITodoList } from 'common/types/entities'

import { 
  todoList as todoListsTypes,
  removeTodoList as removeTodoListTypes,
  addTodo as addTodoToBoardTypes,
  removeTodo as removeTodoTypes,
  saveTodo as addTodoTypes
} from '../constants/entities'

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

export const addTodoToBoard = createAsyncAction(
  addTodoToBoardTypes.TODO_ADD_START,
  addTodoToBoardTypes.TODO_ADD_SUCCESS,
  addTodoToBoardTypes.TODO_ADD_ERROR
)<void, String, Error>()

export const removeTodo = createAsyncAction(
  removeTodoTypes.TODO_REMOVE_START,
  removeTodoTypes.TODO_REMOVE_SUCCESS,
  removeTodoTypes.TODO_REMOVE_ERROR
)<void, String, Error>()

export const saveTodo = createAsyncAction(
  addTodoTypes.TODO_SAVE_START,
  addTodoTypes.TODO_SAVE_SUCCESS,
  addTodoTypes.TODO_SAVE_ERROR
)<void, String, Error>()

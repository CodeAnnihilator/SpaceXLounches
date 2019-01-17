import {
  todoList as types,
  removeTodoList as removeTypes,
  addTodo as addTodoTypes,
  removeTodo as removeTodoTypes,
  saveTodo as saveTodoTypes
} from 'common/constants/entities'

// import { ITodoLists } from 'common/types/entities'

const initialState: any = {
  lists: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.TODO_LIST_ADD_SUCCESS:
      return {
        ...state,
        lists: [...state.lists, action.payload]
      }
    case removeTypes.TODO_LIST_REMOVE_SUCCESS:
      return {
        ...state,
        lists: state.lists.filter(board => board.listID !== action.payload)
      }
    case addTodoTypes.TODO_ADD_SUCCESS:
      const { listID, text, todoID } = action.payload

      return {
        ...state,
        lists: state.lists.map(list => {
          if (list.listID === listID) {
            list.todos.push({
              todoID,
              text
            })
          }
          return list
        })
      }
    case removeTodoTypes.TODO_REMOVE_SUCCESS:
      return {
        ...state,
        lists: state.lists.map(list => {
          if (list.listID === action.payload.listID) {
            list.todos = list.todos.filter(todo => {
              return todo.todoID !== action.payload.todoID
            })
          }
          return list
        })
      }
    case saveTodoTypes.TODO_SAVE_SUCCESS:
      return {
        ...state,
        lists: state.lists.map(list => {
          if (list.listID === action.payload.listID) {
            list.todos.forEach(todo => {
              if (todo.todoID === action.payload.todoID) {
                todo.text = action.payload.text
              }
            })
          }
          return list
        })
      }
    default:
      return state
  }
}

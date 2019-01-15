import { todoList as types, removeTodoList as removeTypes } from 'common/constants/entities'

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
        lists: state.lists.filter(board => board.uniqID !== action.payload)
    }
    default:
      return state
  }
}

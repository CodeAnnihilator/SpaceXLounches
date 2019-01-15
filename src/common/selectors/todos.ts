export const getTodosLists = state => state.todos.lists

export const getTodosListsLength = state => state.todos.lists.length

export const getTodos = (state, index) => state.todos.lists[index].todos
import types from '../constants/entities'

const initialState = {
  launches: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_LAUNCHES_SUCCESS:
      return {
        ...state,
        launches: action.payload
      }
    default:
      return state
  }
}
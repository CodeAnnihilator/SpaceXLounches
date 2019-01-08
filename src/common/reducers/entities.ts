import { launches as launchesTypes } from '../constants/entities'

import { ILaunches } from 'common/types/entities'

const initialState: ILaunches = {
  launches: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case launchesTypes.REQUEST_LAUNCHES_SUCCESS:
      return {
        ...state,
        launches: action.payload
      }
    default:
      return state
  }
}
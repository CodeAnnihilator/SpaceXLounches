import types from '../constants/entities'


export const requestLaunches = () => ({ type: types.REQUEST_LAUNCHES })

export const requestLaunchesSuccess = data => ({
  type: types.REQUEST_LAUNCHES_SUCCESS,
  payload: data
})

export const requestLaunchesError = error => ({
  type: types.REQUEST_LAUNCHES_ERROR,
  payload: error
})
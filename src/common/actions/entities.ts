import { createAsyncAction } from 'typesafe-actions'

import { ILaunch } from 'common/types/entities'

import { launches as launchesTypes } from '../constants/entities'

export const requestLaunches = createAsyncAction(
  launchesTypes.REQUEST_LAUNCHES_REQUEST,
  launchesTypes.REQUEST_LAUNCHES_SUCCESS,
  launchesTypes.REQUEST_LAUNCHES_ERROR
)<void, Array<ILaunch>, Error>()
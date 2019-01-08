import { takeLatest, call, put } from 'redux-saga/effects'

import { apiLaunches } from 'api/entities'
import { requestLaunches } from 'common/actions/entities'

import { launches as launchesTypes } from 'common/constants/entities'

function* requestLaunchesSaga() {
  try {
    const { data } = yield call(apiLaunches)
    yield put(requestLaunches.success(data))
  } catch (error) {
    console.log(error)
    // yield put(requestLaunchesError(error))
  }
}

export default function* watchEntities() {
  yield takeLatest(launchesTypes.REQUEST_LAUNCHES_REQUEST, requestLaunchesSaga)
}
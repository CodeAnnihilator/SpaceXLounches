import { takeLatest, call, put } from 'redux-saga/effects'

import { requestLaunches } from 'api/entities'
import { requestLaunchesSuccess } from 'common/actions/entities'

import types from 'common/constants/entities'

function* requestLaunchesSaga() {
  try {
    const { data } = yield call(requestLaunches)
    yield put(requestLaunchesSuccess(data))
  } catch (error) {
    console.log(error)
    // yield put(requestLaunchesError(error))
  }
}

export default function* watchEntities() {
  yield takeLatest(types.REQUEST_LAUNCHES, requestLaunchesSaga)
}
import { takeLatest, call, put } from 'redux-saga/effects'
import { requestTodos } from 'common/actions/todos'
import { todos as todosTypes } from 'common/constants/todos'

function* getTodosSaga() {
  try {
    yield put(requestTodos.success(data))
  } catch (error) {
    console.log(error)
    // yield put(requestLaunchesError(error))
  }
}

export default function* watchEntities() {
  yield takeLatest(todosTypes.GET_TODOS, getTodosSaga)
}
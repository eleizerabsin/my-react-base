import { takeEvery, call, put } from "redux-saga/effects";
import { DATA_LOADED, DATA_REQUESTED, API_ERRORED } from "../redux/constants/action-types";
import { MSG001_API_ERROR } from "../utils/Message";

export default function* watcherSaga() {
  yield takeEvery(DATA_REQUESTED, workerSaga);
}

function* workerSaga(action) {
    try {
        const payload = yield call(getData, action.payload);
        yield put({ type: DATA_LOADED, payload });
    } catch (e) {
        yield put({ type: API_ERRORED, payload: MSG001_API_ERROR });
    }
}

function getData(url) {
    return fetch(url)
    .then(response =>
        {
            if (response.ok) {
                return response.json()
            } else {
                console.log(response.status)
                return Promise.reject(response.status)
            }
        }
    ).catch(error => 
        {throw new Error(error)}
    );
}
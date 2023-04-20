import { put, takeLatest } from "redux-saga/effects";
import { INCREMENT_ASYNC, DECREMENT_ASYNC, increment, decrement } from "./Counter.action";


function* incrementAsyncSaga() {
    console.log("incremnet saga called")
    yield put(increment());
}

function* decrementAsyncSaga() {
    console.log("decremnet saga called")
    yield put(decrement());
}
export function* countersaga() {
    yield takeLatest(INCREMENT_ASYNC, incrementAsyncSaga);
    yield takeLatest(DECREMENT_ASYNC, decrementAsyncSaga);
}
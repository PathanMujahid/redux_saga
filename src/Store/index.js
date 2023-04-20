import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import counterReducer from "./Counter/Counter.reducer";
import { countersaga } from "./Counter/Counter.saga";

const combinedReducers = combineReducers({ counterReducer });
const SagaMiddleware = createSagaMiddleware();
const Store = createStore(combinedReducers, applyMiddleware(SagaMiddleware));

function* rootsaga() {
    yield all([countersaga()]);
}
SagaMiddleware.run(rootsaga);

export default Store;
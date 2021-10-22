import {put, takeEvery} from 'redux-saga/effects';
import {increaseAction, decreeseAction} from './../store/counterReducer';
import {ASYNC_INCREASE, ASYNC_DECREES } from './../store/counterReducer';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* incrementWorker() {

    yield delay(1000);
    yield(put(increaseAction()))

}

function* decrementWorker() {
    yield delay(2000);
    yield(put(decreeseAction()));
}

export function* countWatcher() {
    yield takeEvery(ASYNC_INCREASE, incrementWorker);
    yield takeEvery(ASYNC_DECREES, decrementWorker);
}
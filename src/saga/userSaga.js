import {put, takeEvery, call} from 'redux-saga/effects';
import {usersAddAction, ASYNC_ADD_USERS} from './../store/usersReducer';

const fetchUsers = () => fetch('https://jsonplaceholder.typicode.com/users');

function* userWorker () {
    const data = yield call(fetchUsers);
    const json = yield call( () => new Promise(res => res(data.json()) ));
    yield put(usersAddAction(json));
}

export function* userWatcher () {
    yield takeEvery(ASYNC_ADD_USERS, userWorker);
}
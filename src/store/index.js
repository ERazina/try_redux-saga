import {combineReducers} from 'redux';
import {counterReducer } from './counterReducer';
import {createStore} from 'redux';
import {usersReducer} from './usersReducer';
import { applyMiddleware } from 'redux';
import {todosReducer} from './todosReducer';
import createSagaMiddleware from 'redux-saga';
import {rootWatcher} from './../saga/index'

const sagaMiddleWare = createSagaMiddleware();

const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
    todos: todosReducer
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootWatcher);

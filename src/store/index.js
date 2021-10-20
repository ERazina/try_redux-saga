import {combineReducers} from 'redux';
import {counterReducer } from './counterReducer';
import {createStore} from 'redux';
import {usersReducer} from './usersReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer
});


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
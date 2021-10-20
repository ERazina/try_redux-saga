
import {todosAction} from './../store/todosReducer';

export const getTodos = () => {
    return dispatch => (
        fetch('https://my-json-server.typicode.com/erazina/toDoAppBackend/todos')
        .then(res => res.json())
        .then(res => dispatch(todosAction(res)))
    )
}
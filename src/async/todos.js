
import {todosAction, todoDeleteAction} from './../store/todosReducer';

export const getTodos = () => {
    return dispatch => (
        fetch('https://my-json-server.typicode.com/erazina/toDoAppBackend/todos')
        .then(res => res.json())
        .then(res => dispatch(todosAction(res)))
    )
};


export const deleteTodo = (todo) => {
    return dispatch => (
        fetch('https://my-json-server.typicode.com/erazina/toDoAppBackend/todos/' + todo.id))
            .then(res => res.json())
        .then(res => dispatch(todoDeleteAction(res)))
}
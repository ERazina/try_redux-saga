
import {todosAction, todoDeleteAction} from './../store/todosReducer';

export const getTodos = () => {
    return dispatch => (
        fetch('https://my-json-server.typicode.com/erazina/toDoAppBackend/todos')
        .then(res => res.json())
        .then(res => dispatch(todosAction(res)))
    )
};


export const deleteTodo = (id) => {
    console.log(1)
    // return dispatch => (
    //     fetch(`https://my-json-server.typicode.com/erazina/toDoAppBackend/todos/${id}`, 
    //     {method: 'DELETE', 
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: null})
    //     .then(res => res.json())
    //     .then(res => dispatch(todoDeleteAction(res)))
    //     .then(res => console.log(res))
    // )


    return dispatch => (
        fetch('https://my-json-server.typicode.com/erazina/toDoAppBackend/todos/' + id, {
        method: 'DELETE'}
            ))
            .then(res => res.json())
        .then(res => dispatch(todoDeleteAction(res)))
        // .then(res => console.log(res))
}
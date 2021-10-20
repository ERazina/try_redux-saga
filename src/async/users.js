import {usersAddAction} from './../store/usersReducer';

export const getUsers = () => {
    return dispatch => (
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => dispatch(usersAddAction(json)))
    )
}
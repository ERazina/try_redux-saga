const defaultState = {users: []};

const ADD_USERS = 'ADD_USERS';
export const ASYNC_ADD_USERS = 'ASYNC_ADD_USERS';

export const usersReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_USERS: {
            return {...state, users: [...state.users, ...action.payload]}
        }
        default: return state;
    }
}

export const usersAddAction = (payload) => ({
    type: ADD_USERS, 
    payload
});

export const asyncUsersAddAction = (payload) => ({
    type: ASYNC_ADD_USERS, 
    payload
});


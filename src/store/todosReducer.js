

export const GET_TODOS = 'GET_TODOS';

export const initialState = {
    todos: []
}

export const todosReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_TODOS: {
            return {...state, todos: [...state.todos, ...action.payload]}
        }
        default: return state;
    }
}

export const todosAction = (payload) => ({
    type: GET_TODOS,
    payload
})
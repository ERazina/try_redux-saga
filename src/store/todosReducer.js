

export const GET_TODOS = 'GET_TODOS';

export const DELETE_TODO = 'DELETE_TODO';

export const initialState = {
    todos: []
}

export const todosReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_TODOS: {
            return {...state, todos: [...state.todos, ...action.payload]}
        }
        case DELETE_TODO: {
            return {...state, 
                todos: [...state.todos.filter((todo) => todo.completed && todo.id !== action.payload)]
            }
        }
        default: return state;
    }
}

export const todosAction = (payload) => ({
    type: GET_TODOS,
    payload
})

export const todoDeleteAction = (payload) => ({
    type: DELETE_TODO,
    payload
})
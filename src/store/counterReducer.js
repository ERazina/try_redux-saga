import {createStore} from 'redux';

export const INCREASE = 'INCREASE';
export const DECREESE = 'DECREESE';

const defaultState = {
    counter: 0
};

export const counterReducer = (state = defaultState, action) => {
    switch(action.type){
        case INCREASE: {
            // return {...state, customers: [...state.customers, action.payload]}
            return {...state, counter: state.counter + 1}
        }

        case DECREESE: {
            return{...state, counter: state.counter - 1}
        }
        default: return  state;
    }
}

export const increaseAction = (payload) => ({
    type: INCREASE,
    payload
});


export const decreeseAction = (payload) => ({
    type: DECREESE,
    payload
});
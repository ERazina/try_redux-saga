export const INCREASE = 'INCREASE';
export const DECREESE = 'DECREESE';
export const ASYNC_INCREASE = 'ASYNC_INCREASE';
export const ASYNC_DECREES = 'ASYNC_DECREES';

const defaultState = {
    counter: 0
};

export const counterReducer = (state = defaultState, action) => {
    switch(action.type){
        case INCREASE: {
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


export const asyncIncreaseAction = (payload) => ({
    type: ASYNC_INCREASE,
    payload
});


export const asyncDecreeeseAction = (payload) => ({
    type: ASYNC_DECREES,
    payload
})
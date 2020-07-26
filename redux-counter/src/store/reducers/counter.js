
import * as counterActions from '../actions/counter'

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case counterActions.INCREMENT_COUNT:
            return {
                ...state, 
                counter: state.counter + 1
            }
        case counterActions.DECREMENT_COUNT:
            return {
                ...state, 
                counter: state.counter - 1
            }
        case counterActions.ADD_COUNT:
            return {
                ...state, 
                counter: state.counter + action.value
            }
        case counterActions.SUBTRACT_COUNT:
            return {
                ...state, 
                counter: state.counter - action.value
            }
    }
    return state
}

export default reducer
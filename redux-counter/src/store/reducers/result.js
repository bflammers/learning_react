
import * as resultActions from '../actions/result'

const initialState = {
    result_list: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case resultActions.STORE_COUNT:
            return {
                ...state, 
                result_list: state.result_list.concat(action.count)
            }
        case resultActions.DELETE_COUNT:
            return {
                ...state, 
                result_list: state.result_list.filter((_, index) => index !== action.index)
            }
    }
    return state
}

export default reducer
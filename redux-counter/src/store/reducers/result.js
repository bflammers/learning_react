
import * as actionTypes from '../actions'

const initialState = {
    result_list: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE:
            return {
                ...state, 
                result_list: state.result_list.concat(action.count)
            }
        case actionTypes.DELETE:
            // const new_del_result_list = [...state.result_list]
            // new_del_result_list.splice(action.index, 1)
            return {
                ...state, 
                result_list: state.result_list.filter((_, index) => index !== action.index)
            }
    }
    return state
}

export default reducer

import * as authActionTypes from '../action_types/auth'

const initialState = {
    authenticated: false,
    token: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authActionTypes.SET_AUTHENTICATED:
            return {
                ...state, 
                authenticated: action.auth
            }
        case authActionTypes.STORE_TOKEN:
            return {
                ...state, 
                token: action.token
            }
        case authActionTypes.REMOVE_TOKEN:
            return {
                ...state, 
                token: null
            }
    }
    return state
}

export default authReducer

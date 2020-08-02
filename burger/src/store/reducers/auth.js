/* eslint-disable no-fallthrough */

import * as authActionTypes from '../action_types/auth'


const initialState = {
    submitting: false,
    token: null, 
    loginFailed: false
}

const authStart = (state) => {
    return {
        ...state, 
        submitting: true, 
        loginFailed: false
    }
}

const authSuccess = (state, action) => {
    return {
        submitting: false,
        token: action.token, 
        loginFailed: false
    }
}

const authFail = (state, action) => {
    return {
        ...state,
        submitting: false, 
        loginFailed: true
    }
}

const logout = (state, action) => {
    return {
        ...state,
        token: null
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authActionTypes.AUTH_START: return authStart(state)
        case authActionTypes.AUTH_SUCCESS: return authSuccess(state, action)
        case authActionTypes.AUTH_FAIL: return authFail(state, action)
        case authActionTypes.LOGOUT: return logout(state, action)
        default: 
            return state
    }
}

export default authReducer

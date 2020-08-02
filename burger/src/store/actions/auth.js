
import * as authActionTypes from '../action_types/auth'
import axios from '../../axios-db'

export const authStart = () => {
    return {
        type: authActionTypes.AUTH_START
    }
}

export const authSuccess = (token) => {
    return {
        type: authActionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = (error) => {
    return {
        type: authActionTypes.AUTH_FAIL,
        token: error
    }
}

export const login = (username, password) => {
    return dispatch => {
        dispatch(authStart())
        axios.post('http://127.0.0.1:8000/auth/', {
            username: username, 
            password: password
        }).then(response => {
            axios.addInterceptor(response.data.token)
            dispatch(authSuccess(response.data.token))
        }).catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const logout = () => {
    return {
        type: authActionTypes.LOGOUT
    }
}

export const testConnection = () => {

    axios.get('orders/')
        .then(response => {
            if (response.status === 200) {
                console.log('CONNECTION OK')
            }
        })
        .catch(err => console.log(err))
}



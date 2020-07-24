
import * as authActionTypes from '../action_types/auth'
import axios from '../../axios-db'

export const setAuthenticated = (auth) => {
    return {
        type: authActionTypes.SET_AUTHENTICATED,
        auth: auth
    }
}

export const storeToken = (token) => {
    return {
        type: authActionTypes.STORE_TOKEN,
        token: token
    }
}

export const getToken = (username, password) => {
    return dispatch => {
        console.log('Sending request to auth')
        axios.post('http://127.0.0.1:8000/auth/', {
            username: username, 
            password: password
        }).then(response => {
            dispatch(storeToken(response.data.token))
            dispatch(setAuthenticated(true))
            axios.addInterceptor(response.data.token)
            console.log('Login succesful, username: ', JSON.parse(response.config.data)['username'])
        })
    }
}

export const testConnection = () => {

    // let config = {
    //     headers: {
    //         Authorization: 'Token ' + store.getState().auth.token
    //     }
    // }
    // console.log(config)

    axios.get('/clients/2/get_orders/')
        .then(response => {
            if (response.status === 200) {
                console.log('CONNECTION OK')
            }
        })
        .catch(err => console.log(err))
}




import axios from 'axios'
import store from './store/store'

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/db/'
})

instance.addInterceptor = function (token = null) {
    this.interceptors.request.use((config) => {
        if (token) {
            config.headers['Authorization'] = 'Token ' + token 
        } else {
            config.headers['Authorization'] = 'Token ' + store.getState().auth.token
        } 
        // config.headers.post['Authorization'] = 'Token ' + token;
        // config.headers.get['Authorization'] = 'Token ' + token;
        return config;
    })
}

export default instance

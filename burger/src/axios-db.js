import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/db/'
})

const addInterceptor = (token) => {
    instance.interceptors.request.use((config) => {
        config.headers.post['Authorization'] = 'Token ' + token;
        return config;
    })
}

const login = (username, password) => {
    axios.post('http://127.0.0.1:8000/auth/', {
        username: 'bartlammers', 
        password: 'bartlammers'
    }).then(response => {
        addInterceptor(response.data.token)
        console.log('Login succesful, username: ', JSON.parse(response.config.data)['username'])
    }).catch(error => {
        console.log('Login failed: ', error.message, error)
    })
}

export {login}
export default instance

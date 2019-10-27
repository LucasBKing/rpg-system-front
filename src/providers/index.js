import axios from 'axios'

export const __API__ = `https://rpg-system-backend.herokuapp.com/`

const defaultOptions = {
  baseURL: __API__
}

const instance = axios.create(defaultOptions)

instance.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${window.localStorage.getItem('@rpgAuth:token')}`
  return config
})

instance.interceptors.response.use(
  function(response) {
    return response
  },
  error => {
    if (error && error.response && error.response.status === 401 && window.location.pathname !== '/login') {
      window.location.href = '/login'
    } else {
      return Promise.reject(error)
    }
  }
)

export default instance

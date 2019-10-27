import api from '../providers'

export const register = ({ name, email, password }) =>
  api.post('/users/register', { name, email, password })

export const authenticate = ({ email, password }) =>
  api.post('/users/authenticate', { email, password })

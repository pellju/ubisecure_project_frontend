import axios from 'axios'
const loginUrl = 'http://localhost:3001/api/login'
const registrationUrl = 'http://localhost:3001/api/register'

const login = async (credentials) => {
    const response = await axios.post(loginUrl, credentials)
    return response.data
}

const register = async (data) => {
    const response = await axios.post(registrationUrl, data)
    return response.data
}

export default { login, register }
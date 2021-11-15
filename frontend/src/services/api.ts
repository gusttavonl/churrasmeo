import axios from 'axios'

const api = axios.create({
  baseURL: 'https://churrasmeo.herokuapp.com/'
})

export default api

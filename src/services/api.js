import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://beta-foodexplorer-api.onrender.com'
})

import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.100.10:3333'
})

export default api;
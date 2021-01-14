import axios from 'axios';

const api = axios.create({
    baseURL: 'http://104.248.122.79/',
});

export default api;

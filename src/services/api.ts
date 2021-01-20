import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nodedeploy.agenciaultrafoco.com.br/',
});

export default api;

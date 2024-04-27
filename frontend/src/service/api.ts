
// ANCHOR --> IMPORTS AXIOS
import axios, { AxiosInstance } from 'axios';
// END AXIOS

// STUB --> Configuração Axios
const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 5000, // tempo limite da solicitação (opcional)
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export default api;
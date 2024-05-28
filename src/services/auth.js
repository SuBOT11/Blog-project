import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://192.168.1.65:5050/auth',
    headers: {
        'Content-Type':'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization =  `Bearer ${token}`;
        }
        return config
    },
    (error) => {
        return Promise.reject(error);
    }
)
export default axiosInstance;
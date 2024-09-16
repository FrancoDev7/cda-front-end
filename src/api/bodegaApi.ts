import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables();

const bodegaApi = axios.create({
  baseURL: VITE_API_URL,
});

// Configurar interceptores de Axios
bodegaApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers = config.headers || new axios.AxiosHeaders();
  config.headers.set('x-token', localStorage.getItem('token') || '');
  return config;
},
  (error: AxiosError) => {
    // Manejo de errores en la solicitud
    return Promise.reject(error);
  }
);


export default bodegaApi;